import { Knex } from 'knex';

interface MetadataAttribute {
  trait_type?: string;
  display_type?: string;
  value: number | string;
}

export interface Metadata {
  id: number;
  name: string;
  description: string;
  image?: string;
  image_data?: string;
  external_url?: string;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
  attributes: MetadataAttribute[];
  created_at: string;
  updated_at: string;
}

export interface MetadataInsert
  extends Pick<Metadata, 'name' | 'description'>,
    Partial<Pick<Metadata, 'created_at' | 'updated_at'>> {
  attributes: string;
}

export interface MetadataUpdate
  extends Omit<Partial<Metadata>, 'id' | 'attributes'> {
  attributes: string;
}

declare module 'knex/types/tables' {
  interface Tables {
    metadata_composite: Knex.CompositeTableType<
      Metadata,
      MetadataInsert,
      MetadataUpdate
    >;
  }
}
