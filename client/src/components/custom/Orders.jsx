import React from 'react';
import { Card } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import OrderProductTile from './OrderProductTile';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const Orders = () => {
  return (
    <div className='px-4 sm:px-8'>
      <h1 className='text-3xl font-bold mb-8 ml-2'>Orders</h1>
      <div className='flex flex-col gap-5 mx-auto my-10'>
        <div className='space-y-8'>
          <div className='mb-4'>
            <h2 className='text-xl font-medium'>Orders Summary</h2>
          </div>
          <div className='grid space-y-4 gap-4'>
            <Card className='space-y-4 p-4 shadow-md'>
              <div className='grid sm:grid-cols-3 gap-2 '>
                <OrderProductTile />
                <OrderProductTile />
                <OrderProductTile />
              </div>
              <hr />
              <div className='space-y-2'>
                <p className='flex justify-between sm:justify-start gap-2 items-center px-3'>
                  <span className='font-bold'>Total:</span>
                  <span className='text-sm text-customGray'>₹560</span>
                </p>
                <p className='flex justify-between sm:justify-start gap-2 items-center px-3'>
                  <span className='font-bold'>Address:</span>
                  <span className='text-sm text-customGray'>Lorem ipsum dolor sit amet consectetur.</span>
                </p>
                <p className='flex justify-between sm:justify-start gap-2 items-center px-3'>
                  <span className='font-bold'>Name:</span>
                  <span className='text-sm text-customGray'>Raj Padval</span>
                </p>
                <p className='flex justify-between sm:justify-start gap-2 items-center px-3'>
                  <span className='font-bold'>Email:</span>
                  <span className='text-sm text-customGray'>abc1234@gmail.com</span>
                </p>
              </div>
              <Select className='mt-4'>
                <SelectTrigger>
                  <SelectValue placeholder="pending" />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  <SelectItem value='pending'>Pending</SelectItem>
                  <SelectItem value='packed'>Packed</SelectItem>
                  <SelectItem value='in Transit'>in Transit</SelectItem>
                  <SelectItem value='completed'>completed</SelectItem>
                  <SelectItem value='failed'>failed</SelectItem>
                </SelectContent>
              </Select>
            </Card>
          </div>
        </div>

        <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>


      </div>
    </div>
  );
};

export default Orders;