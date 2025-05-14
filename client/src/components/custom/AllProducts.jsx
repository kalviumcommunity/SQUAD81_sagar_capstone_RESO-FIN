import React from 'react';
import { Label } from '../ui/label';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Edit } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Textarea } from '../ui/textarea';

const AllProducts = () => {
  return (
    <div className='mx-auto px-4 sm:px-8 -z-10'>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className='mb-8'>
        <form className='flex gap-4 items-end'>
          <div className='flex-1'>
            <Label htmlFor="search" className='block text-sm font-medium text-gray'>
              Search products
            </Label>
            <div className='relative'>
              <Input type="text" id="search" placeholder="search by name or description"
                className="pl-10" />
              <Search size={20} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
          </div>
          <div className='w-48'>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="headset">Headset</SelectItem>
                <SelectItem value="keyboard">KeyBoard</SelectItem>
                <SelectItem value="mouse">Mouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 sm:mx-o" >
      <Card className="flex flex-col">
  
    <div className="relative w-full h-64">
      <img
        src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Product"
        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
      />
    </div>
  
  <CardContent className="flex-grow p-4">
    <h3 className='text-lg font-semibold mb-2'> Ant Esports keyboard</h3>
    <p className='text-lg font-bold text-gray-600 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ad.</p>
    <p>₹235.00</p>
  </CardContent>

<CardFooter className="p-4 pt-0 flex justify-between">
  <Button variant="outline">
    <Edit className='mr-2 h-4 s-4'/> Edit
  </Button>

  <Button>
    Blacklist Product
  </Button>

</CardFooter>

</Card>


      </div>

      <Dialog >
  
  <DialogContent className="sm:max-w-[435px]">
    <DialogHeader>
      <DialogTitle>Edit Product?</DialogTitle>
    </DialogHeader>

    <form>
      <div className='grid gap-4 py-4'> 
        <div className='grid gap-4 items-center'>
          <Label htmlFor="name" >Name</Label>
          <Input id="name" name="name" className="cols-span-3" />
        </div>

      
        <div className='grid gap-4 items-center'>
          <Label htmlFor="description" >Description</Label>
          <Textarea id="description" name="description" className="cols-span-3" rows={4} />
        </div>

        <div className='grid gap-4 items-center'>
          <Label htmlFor="price" >Price</Label>
          <Input type="number" id="price" name="price" className="cols-span-3" rows={4} />
        </div>

        <div className='grid gap-4 items-center'>
          <Label htmlFor="category" >Category</Label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
             <SelectItem value="Headset">Headset</SelectItem> 
             <SelectItem value="keyboard">Keyboard</SelectItem>   
             <SelectItem value="mouse">Mouse</SelectItem>   
             <SelectItem value="pendrive">Pendrive</SelectItem>               
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save Changes</Button>
      </DialogFooter>
    </form>



  </DialogContent>
</Dialog>





    </div>
  );
};

export default AllProducts;