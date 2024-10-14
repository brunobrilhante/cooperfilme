import { Roteiro } from '../models/Roteiro.js';

export async function enviarRoteiro(req, res) {
  const { nomeCliente, emailCliente, telefoneCliente, conteudo } = req.body;
  const roteiro = await Roteiro.create({ nomeCliente, emailCliente, telefoneCliente, conteudo });
  res.status(201).json(roteiro);
}

export async function consultarStatus(req, res) {
  const { id } = req.params;
  const roteiro = await Roteiro.findByPk(id);
  res.json(roteiro ? roteiro.status : 'Roteiro não encontrado');
}

export async function buscarRoteiro(req, res) {
  const { id } = req.params;
  const roteiro = await Roteiro.findByPk(id);
  res.json(roteiro ? roteiro : 'Roteiro não encontrado');
}

export async function listarRoteiros(req, res) {
  const roteiros = await Roteiro.findAll();
  res.json(roteiros);
}

const aprovadores = new Set([]);
export async function alterarStatus(req, res) {
  const { id } = req.params;
  const { novoStatus } = req.body;
  const usuario = req.usuario;
  
  try {
    const roteiro = await Roteiro.findByPk(id);

    if (!roteiro) {
      return res.status(404).send('Roteiro não encontrado');
    }

    // Verificar se o cargo do usuário permite a mudança de status
    if (roteiro.status === 'AGUARDANDO_ANALISE') {
      roteiro.status = 'EM_ANALISE';
      roteiro.save();
    } else if (usuario.cargo === 'ANALISTA' && roteiro.status === 'EM_ANALISE') {
      if (novoStatus === 'AGUARDANDO_REVISAO' || novoStatus === 'RECUSADO') {
        roteiro.status = novoStatus;
        roteiro.save();
      }
    } else if (usuario.cargo === 'REVISOR' && roteiro.status === 'AGUARDANDO_REVISAO') {
      roteiro.status = 'EM_REVISAO';
      roteiro.save();
    } else if (usuario.cargo === 'REVISOR' && roteiro.status === 'EM_REVISAO') {
      roteiro.status = 'AGUARDANDO_APROVACAO';
      roteiro.save();
    } else if (usuario.cargo === 'APROVADOR' && roteiro.status === 'AGUARDANDO_APROVACAO') {
      if (novoStatus === 'APROVADO') {
        aprovadores.add(usuario.email);
        if (aprovadores.size === 3) {
          roteiro.status = 'APROVADO';
          roteiro.save();
          aprovadores.clear();
        }
        else {          
          return res.status(202).json({ message: 'Aprovação pendente' });
        }
      } else if (novoStatus === 'RECUSADO') {
        roteiro.status = 'RECUSADO';
        roteiro.save();
      } 
    } else {
      return res.status(403).json({ error: 'Usuário não tem permissão para mudar o status nesse estágio' });
    }

    roteiro.save();
    return res.status(200).json({ message: 'Status atualizado com sucesso', roteiro });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o status do roteiro' });
  }
}