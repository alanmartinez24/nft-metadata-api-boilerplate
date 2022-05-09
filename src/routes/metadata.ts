import { ServerRoute } from '@hapi/hapi';

import {
  handleCreateMetadata,
  handleDeleteMetadata,
  handleGetMetadata,
  handleGetMetadataList,
  handleUpdateMetadata
} from '../controllers/metadata';
import {
  IdValidator,
  MetadataCreationValidator,
  MetadataUpdateValidator
} from './validation-schema';

const metadataRoutes: ServerRoute[] = [
  {
    path: '/metadata',
    method: 'GET',
    handler: handleGetMetadataList
  },
  {
    path: '/metadata',
    method: 'POST',
    handler: handleCreateMetadata,
    options: {
      validate: {
        payload: MetadataCreationValidator
      }
    }
  },
  {
    path: '/metadata/{id}',
    method: 'GET',
    handler: handleGetMetadata,
    options: {
      validate: {
        params: IdValidator
      }
    }
  },
  {
    path: '/metadata/{id}',
    method: 'PATCH',
    handler: handleUpdateMetadata,
    options: {
      validate: {
        params: IdValidator,
        payload: MetadataUpdateValidator
      }
    }
  },
  {
    path: '/metadata/{id}',
    method: 'DELETE',
    handler: handleDeleteMetadata,
    options: {
      validate: {
        params: IdValidator
      }
    }
  }
];

export default metadataRoutes;
