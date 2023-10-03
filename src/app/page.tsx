"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { ThemeToggle } from "@/components/layouts/theme-toggle"
import { Item } from '@/types';
import { ItemCard } from '@/components/cards/item-card';

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
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <ThemeToggle />
      {/* {items?.map((item) => (
        <Link href={`/item/${item.id}`} key={item.id}>
            <Card className="w-[300px] flex flex-col mb-4">
              <CardHeader>
                <Image src={item.previewImgUrl} alt={item.title} width={150} height={150} />
              </CardHeader>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
        </Link>
      ))} */}
      {items?.map((item) => (
        <ItemCard Item={item} key={item.id} />
      ))}
    </main>
  );
}
