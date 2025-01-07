import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary">Shipping</Link></li>
              <li><Link href="#" className="hover:text-primary">Returns</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="mb-2">Email: support@v0ecommerce.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Address: 123 eCommerce St, Web City, 12345</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 eCommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}