import React, { useState, useRef } from 'react';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { X, Upload, Loader2 } from 'lucide-react';

const CreateProducts = () => {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const addColor = () => {
    if (!colors.includes(currentColor)) {
      setColors([...colors, currentColor]);
    }
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
    setFileNames(fileNames.filter((_, index) => index !== indexToRemove));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    const newFileNames = files.map(file => file.name);
    setImages([...images, ...newImages]);
    setFileNames([...fileNames, ...newFileNames]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Product added successfully!');
    }, 2000);
  };

  return (
    <div className='w-full max-w-2xl z-10'>
      <CardHeader>
        <CardTitle>Add new Product</CardTitle>
        <CardDescription>
          Enter the details for the new products you want to add to your e-commerce store
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col lg:flex-row lg:w-[70vw]'>
          <CardContent className="w-full">
            <div className='space-y-2'>
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" placeholder="Enter product name" required />
            </div>

            <div className='space-y-2'>
              <Label htmlFor="Description">Description</Label>
              <Input id="Description" name="Description" placeholder="Enter product Description" required />
            </div>

            <div className='space-y-2'>
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" type="number" placeholder="0.00" step="0.01" min="0" required />
            </div>

            <div className='space-y-2'>
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" name="stock" type="number" placeholder="20" min="0" required />
            </div>
          </CardContent>

          <CardContent className="w-full">
            <div className='space-y-2'>
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="headset">Headset</SelectItem>
                  <SelectItem value="keyBoard">KeyBoard</SelectItem>
                  <SelectItem value="Mouse">Mouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="color">Colors</Label>
              <div className='flex items-center space-x-2'>
                <Input id="color" type="color" value={currentColor} onChange={(e) => setCurrentColor(e.target.value)}
                  className="w-12 h-12 p-1 rounded-md" />

                <Button variant="outline" onClick={addColor}>Add color</Button>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mt-2'>
              {
                colors.map((color, index) => (
                  <div key={index} className='flex items-center bg-gray-100 rounded-full pl-2 pr-1 py-1'>
                    <div className='w-4 h-4 rounded-full mr-2' style={{ backgroundColor: color }}></div>
                    <span className='text-sm mr-1 dark:text-slate-900'>{color}</span>
                    <Button variant="ghost" className="h-6 w-6 p-0 rounded-full" onClick={() => removeColor(color)}>
                      <X className='h-4 w-4' />
                      <span className='sr-only'>Remove color</span>
                    </Button>
                  </div>
                ))
              }
            </div>

            <div className='space-y-2'>
              <Label htmlFor="images">Product Images</Label>
              <div className='flex flex-wrap gap-4'>
                {images.map((image, index) => (
                  <div key={index} className='relative'>
                    <img src={image} alt={`Product image ${index + 1}`} width={100} height={100} className='rounded-md object-cover' />
                    <Button variant="destructive" size="icon" className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                      onClick={() => removeImage(index)}>
                      <X className='h-4 w-4' />
                      <span className='sr-only'>Remove image</span>
                    </Button>
                  </div>
                ))}
              </div>
              {images.length < 4 && (
                <div>
                  <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" ref={fileInputRef} id="upload-images" />
                  <label htmlFor="upload-images">
                    <Button className="w-[100px] h-[100px]" variant="outline" onClick={() => fileInputRef.current?.click()}>
                      <Upload className='h-6 w-6' />
                      <span className='sr-only'>Upload Images</span>
                    </Button>
                  </label>
                  <div className='mt-2'>
                    {fileNames.length > 0 ? (
                      <ul className='list-disc list-inside'>
                        {fileNames.map((name, index) => (
                          <li key={index} className='text-sm'>{name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className='text-sm text-muted-foreground'>No file chosen</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <p className='text-sm text-muted-foreground'>Upload up to four images. Supported formats: IMG, JPG, GIF</p>
          </CardContent>
        </div>

        <CardFooter>
          <Button type="submit" className="w-half" disabled={isLoading}>
            {
              isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            }
            {
              isLoading ? "Adding product..." : "Add product"
            }
          </Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default CreateProducts;