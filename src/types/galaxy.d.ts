interface UserProfile {
  _id: string;
  username: string;
  email: string;
  roles: string[];
  plugins: string[];
  __v: number;
  totalSpent: number;
  credits: number;
  tickets: number;
}

interface AdminProfile {
  users: number;
  plugins: number;
  payments: number;
  totalSales: number;
  clientRanking: ClientRanking[];
}

interface ClientRanking {
  username: string;
  total: number;
  createdAt: string;
}
