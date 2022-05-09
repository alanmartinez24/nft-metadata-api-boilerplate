import Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';

import { Metadata, MetadataUpdate } from '../database/types';
import MetadataQuery from '../database/queries/MetadataQuery';

export async function handleGetMetadataList(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const metadataList = await MetadataQuery.list();
  return h.response(metadataList);
}

export async function handleCreateMetadata(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const { server } = request;
  const reqData = request.payload as Metadata;

  try {
    const createdMetadata = await MetadataQuery.create({
      ...reqData,
      attributes: JSON.stringify(reqData.attributes)
    });

    return h.response(createdMetadata).code(201);
  } catch (e: any) {
    server.log(['metadata', 'creation'], e);

    return Boom.badRequest(e.detail);
  }
}

export async function handleGetMetadata(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const { server } = request;
  const id = request.params.id as number;

  const metadata = await MetadataQuery.findById(id);

  if (!metadata) {
    server.log(['metadata', 'find']);

    return Boom.notFound('Metadata not found.');
  }

  return h.response(metadata);
}

export async function handleUpdateMetadata(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const { server } = request;
  const id = request.params.id as number;
  const updateData = request.payload as MetadataUpdate;

  if (updateData.attributes) {
    updateData.attributes = JSON.stringify(updateData.attributes);
  }

  try {
    const updatedMetadata = await MetadataQuery.update(id, updateData);

    return h.response(updatedMetadata);
  } catch (e: any) {
    server.log(['metadata', 'update'], e);

    return Boom.badRequest(e.detail);
  }
}

export async function handleDeleteMetadata(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  const { server } = request;
  const id = request.params.id as number;

  const isSuccess = await MetadataQuery.deleteById(id);

  return h.response({ success: isSuccess });
}
