import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';

const categoryData = {
    trigger: 'Category',
    items: ['keyboard', 'mouse', 'monitor', 'laptop'],
};

const priceData = {
    trigger: 'Price',
    items: [1000, 3000, 5000, 8000],
};

const searchData = {
    trigger: 'Search',
    items: ['hip hop', 'pop', 'rock', 'jazz'],
};

const FilterMenu = () => {
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [search, setSearch] = React.useState('');

    return (
        <div className="w-[93vw] flex flex-col sm:flex-row justify-between items-center mx-auto my-10 gap-3">
            <div className="flex sm:w-[40%] w-full gap-3">
                {/* Category */}
                <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger id={categoryData.trigger}>
                        <SelectValue placeholder={categoryData.trigger} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {categoryData.items.map((item) => (
                            <SelectItem key={item} value={item} className="capitalize">
                                {item}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                {/* Price */}
                <Select onValueChange={(value) => setPrice(value)}>
                    <SelectTrigger id={priceData.trigger}>
                        <SelectValue placeholder={priceData.trigger} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {priceData.items.map((item) => (
                            <SelectItem key={item} value={item} className="capitalize">
                                Price {item}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Search */}
            <div className="sm:w-[40%] w-full">
                <Input
                    id="search"
                    placeholder="search here..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full"
                />
                {/* Recommendations */}
                {search && (
                    <div
                        className="absolute bg-gray border border-gray-300 rounded-md shadow-md mt-1 w-full z-10"
                        style={{ maxHeight: '200px', overflowY: 'auto' }}
                    >
                        {searchData.items
                            .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
                            .map((filteredItem) => (
                                <div
                                    key={filteredItem}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => setSearch(filteredItem)}
                                >
                                    {filteredItem}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterMenu;
