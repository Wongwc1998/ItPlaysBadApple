"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';

interface Item {
  id: number;
  title: string;
  description: string;
  authorId: number;
  sourceUrl: string;
  tags: number[];
  previewImgUrl: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items from your API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/items');
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error("An error occurred while fetching the data.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items?.map((item) => (
        <Link href={`/item/${item.id}`} key={item.id}>
            <Card className="mb-4">
              <CardHeader>
                <Image src={item.previewImgUrl} alt={item.title} width={150} height={150} />
              </CardHeader>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
        </Link>
      ))}
    </main>
  );
}
