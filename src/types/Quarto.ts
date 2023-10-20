import Entity from './Entity'

export default interface Quarto extends Entity {
  roomNumber: number
  availability: boolean
  // amenities: string[]
  photos: (string | File)[]
}

export const roomsList: Quarto[] = [
  {
    roomNumber: 101,
    availability: true,
    amenities: ['Wi-Fi', 'TV', 'Ar Condicionado'],
    photos: [
      'https://example.com/room101/photo1.jpg',
      'https://example.com/room101/photo2.jpg',
    ],
  },
  {
    roomNumber: 102,
    availability: false,
    amenities: ['TV', 'Banheiro Privativo'],
    photos: ['https://example.com/room102/photo1.jpg'],
  },
  {
    roomNumber: 103,
    availability: true,
    amenities: ['Wi-Fi', 'Café da Manhã Incluso', 'Varanda'],
    photos: [
      'https://example.com/room103/photo1.jpg',
      'https://example.com/room103/photo2.jpg',
      'https://example.com/room103/photo3.jpg',
    ],
  },
  {
    roomNumber: 201,
    availability: true,
    amenities: ['TV', 'Ar Condicionado'],
    photos: [
      'https://example.com/room201/photo1.jpg',
      'https://example.com/room201/photo2.jpg',
    ],
  },
  {
    roomNumber: 202,
    availability: false,
    amenities: ['Wi-Fi', 'Banheiro Privativo'],
    photos: ['https://example.com/room202/photo1.jpg'],
  },
  {
    roomNumber: 203,
    availability: true,
    amenities: ['Café da Manhã Incluso', 'Varanda'],
    photos: [
      'https://example.com/room203/photo1.jpg',
      'https://example.com/room203/photo2.jpg',
    ],
  },
  {
    roomNumber: 301,
    availability: false,
    amenities: ['TV', 'Ar Condicionado'],
    photos: [
      'https://example.com/room301/photo1.jpg',
      'https://example.com/room301/photo2.jpg',
    ],
  },
  {
    roomNumber: 302,
    availability: true,
    amenities: ['Wi-Fi', 'Banheiro Privativo', 'Varanda'],
    photos: [
      'https://example.com/room302/photo1.jpg',
      'https://example.com/room302/photo2.jpg',
      'https://example.com/room302/photo3.jpg',
    ],
  },
  {
    roomNumber: 303,
    availability: true,
    amenities: ['Café da Manhã Incluso'],
    photos: ['https://example.com/room303/photo1.jpg'],
  },
  {
    roomNumber: 401,
    availability: true,
    amenities: ['TV', 'Ar Condicionado'],
    photos: ['https://example.com/room401/photo1.jpg'],
  },
  {
    roomNumber: 402,
    availability: false,
    amenities: ['Wi-Fi', 'Banheiro Privativo'],
    photos: [
      'https://example.com/room402/photo1.jpg',
      'https://example.com/room402/photo2.jpg',
    ],
  },
  {
    roomNumber: 403,
    availability: true,
    amenities: ['Café da Manhã Incluso', 'Varanda'],
    photos: ['https://example.com/room403/photo1.jpg'],
  },
  {
    roomNumber: 501,
    availability: true,
    amenities: ['TV'],
    photos: [
      'https://example.com/room501/photo1.jpg',
      'https://example.com/room501/photo2.jpg',
    ],
  },
  {
    roomNumber: 502,
    availability: true,
    amenities: ['Wi-Fi', 'Banheiro Privativo'],
    photos: ['https://example.com/room502/photo1.jpg'],
  },
  {
    roomNumber: 503,
    availability: false,
    amenities: ['Ar Condicionado', 'Varanda'],
    photos: ['https://example.com/room503/photo1.jpg'],
  },
  {
    roomNumber: 601,
    availability: true,
    amenities: ['Wi-Fi', 'Café da Manhã Incluso'],
    photos: [
      'https://example.com/room601/photo1.jpg',
      'https://example.com/room601/photo2.jpg',
    ],
  },
  {
    roomNumber: 602,
    availability: false,
    amenities: ['TV', 'Banheiro Privativo'],
    photos: ['https://example.com/room602/photo1.jpg'],
  },
  {
    roomNumber: 603,
    availability: true,
    amenities: ['Ar Condicionado', 'Varanda'],
    photos: [
      'https://example.com/room603/photo1.jpg',
      'https://example.com/room603/photo2.jpg',
    ],
  },
  {
    roomNumber: 701,
    availability: true,
    amenities: ['Wi-Fi', 'Café da Manhã Incluso'],
    photos: [
      'https://example.com/room701/photo1.jpg',
      'https://example.com/room701/photo2.jpg',
      'https://example.com/room701/photo3.jpg',
    ],
  },
  {
    roomNumber: 702,
    availability: false,
    amenities: ['TV'],
    photos: ['https://example.com/room702/photo1.jpg'],
  },
  {
    roomNumber: 703,
    availability: true,
    amenities: ['Banheiro Privativo', 'Varanda'],
    photos: [
      'https://example.com/room703/photo1.jpg',
      'https://example.com/room703/photo2.jpg',
    ],
  },
]
