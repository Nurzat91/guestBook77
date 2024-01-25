export interface Messages{
  id: string,
  author: string,
  description: string,
  image: string | null,
}

export type MessagesWithoutId = Omit<Messages, 'id'>;