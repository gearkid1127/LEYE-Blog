import { Blog } from '../types/blog';

const API_URL = 'https://www.lettuce.com/wp-json/lettuce/blog-content';

export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }

  const data = await response.json();

  return data;
}