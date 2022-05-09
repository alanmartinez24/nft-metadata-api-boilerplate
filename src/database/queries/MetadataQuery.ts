import knex from '../knex';
import { Metadata, MetadataInsert, MetadataUpdate } from '../types';

class MetadataQuery {
  static getQuery() {
    return knex('metadata');
  }

  static async list(): Promise<Array<Metadata>> {
    return this.getQuery();
  }

  static async findById(id: number): Promise<Metadata> {
    return this.getQuery().where('id', id).first();
  }

  static async create(data: MetadataInsert): Promise<Metadata> {
    const [createdRes] = await this.getQuery().insert(data).returning('id');

    return this.findById(createdRes.id);
  }

  static async update(id: number, data: MetadataUpdate): Promise<Metadata> {
    await this.getQuery().where('id', id).update(data);

    return this.findById(id);
  }

  static async deleteById(id: number): Promise<boolean> {
    const affectedRows = await this.getQuery().where('id', id).delete();

    return affectedRows === 1;
  }
}

export default MetadataQuery;
