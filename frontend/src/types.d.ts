export interface UserPage{
  id: string;
  author: string;
  description: string;
  image: File | null;
}

export type UserPageProps = Omit<UserPage, 'id'>;
export interface ApiUserPageProps {
  [id: string]: UserPageProps;
}