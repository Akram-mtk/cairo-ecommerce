import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      rating: 4.5,
      reviews: 128,
      badge: '',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.8,
      reviews: 89,
      badge: 'New',
      description: 'Advanced fitness tracking with heart rate monitor and GPS functionality.'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 59.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      rating: 4.3,
      reviews: 256,
      badge: 'Sale',
      description: 'Durable laptop backpack with multiple compartments and water-resistant material.'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 79.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      rating: 4.6,
      reviews: 94,
      badge: 'Popular',
      description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.'
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
      rating: 4.4,
      reviews: 167,
      badge: 'Sale',
      description: 'Ergonomic wireless mouse with precision tracking and long-lasting battery.'
    },
    {
      id: 6,
      name: 'USB-C Hub',
      price: 49.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop',
      rating: 4.7,
      reviews: 73,
      badge: 'New',
      description: 'Multi-port USB-C hub with HDMI, USB 3.0, and fast charging support.'
    }
  ];
}
