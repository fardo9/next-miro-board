'use client'

import { Search } from 'lucide-react'
import { Input } from '..'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default SearchInput
