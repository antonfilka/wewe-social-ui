'use client';
import React from 'react';
import { GetProps, Input, InputProps } from 'antd';

const { Search } = Input;

interface SearchInputProps extends InputProps {
    children?: React.ReactNode;
}
type SearchProps = GetProps<typeof Input.Search>;

export const SearchInput = (props: SearchInputProps) => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
            {...props}
        />
    );
};

export default SearchInput;
