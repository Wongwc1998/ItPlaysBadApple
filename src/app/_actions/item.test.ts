// src/app/_actions/item.test.ts

import { filterItemsAction, getItemsAction } from './item';

describe('filterItemsAction', () => {
  it('should return an empty object for an empty query', () => {
    const result = filterItemsAction('');
    expect(result).toBeNull();
  });

  it('should return an item group for a non-empty query', async () => {
    const query = 'example';
    const itemGroup = {
      vars: [
        {
          id: 1,
          title: 'Example Item 1',
          previewImgUrl: 'example1.jpg',
        },
        {
          id: 2,
          title: 'Example Item 2',
          previewImgUrl: 'example2.jpg',
        },
      ],
    };

    jest.spyOn(prisma.item, 'findMany').mockResolvedValueOnce(itemGroup.vars);

    const result = await filterItemsAction(query);

    expect(result).toEqual([itemGroup]);
  });

  it('should handle errors', () => {
    jest.spyOn(prisma.item, 'findMany').mockRejectedValueOnce(new Error('Mock error'));

    const result = filterItemsAction('example');

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith('Error filtering items:', expect.any(Error));
  });
});

describe('getItemsAction', () => {
  it('should return items and count', async () => {
    const input = {
      limit: 10,
      offset: 0,
      sort: 'title.desc',
      tags: 'tag1.tag2',
    };
    const items = [
      {
        id: 1,
        title: 'Example Item 1',
        previewImgUrl: 'example1.jpg',
      },
      {
        id: 2,
        title: 'Example Item 2',
        previewImgUrl: 'example2.jpg',
      },
    ];
    const count = 2;

    jest.spyOn(prisma.item, 'findMany').mockResolvedValueOnce(items);

    const result = await getItemsAction(input);

    expect(result).toEqual({ items, count });
  });

  it('should handle errors', () => {
    jest.spyOn(prisma.item, 'findMany').mockRejectedValueOnce(new Error('Mock error'));

    expect(async () => {
      await getItemsAction({});
    }).rejects.toThrowError('Mock error');
    expect(console.error).toHaveBeenCalledWith('Error getting items:', expect.any(Error));
  });
});
