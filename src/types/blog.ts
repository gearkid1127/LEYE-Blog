export type Blog = {
  ID: number;
  title: string;
  content: string;
  topics: string[];
  regions: string[];
  restaurants: string[];
  created_at: string;
  updated_at: string;
  featured_image: {
    url: string;
    alt_text: string;
  };
};