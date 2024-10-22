import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const facts = pgTable('facts', {
  id: serial('id').primaryKey(),
  fact_text: text('fact_text').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  userId: uuid('user_id').notNull(),
});