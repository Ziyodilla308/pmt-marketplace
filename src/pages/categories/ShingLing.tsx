import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import product2 from '@/assets/product-2.jpg';

const ShingLing = () => {
  const products = [
    { id: 1, name: 'PMT Shing Ling Pro', price: '$2,999', image: product2 },
    { id: 2, name: 'PMT Shing Ling Elite', price: '$3,499', image: product2 },
    { id: 3, name: 'PMT Shing Ling Master', price: '$3,999', image: product2 },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shing Ling</h1>
          <p className="text-muted-foreground">
            Specialized Shing Ling machines for industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShingLing;
