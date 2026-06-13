import { useState } from 'react'
import { Search, MapPin, Home, DollarSign } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const propertyTypes = ['Any Type', 'House', 'Apartment', 'Condo', 'Townhouse', 'Villa']
const priceRanges = [
  { label: 'Any Price', value: '' },
  { label: 'Under $200k', value: '0-200000' },
  { label: '$200k – $500k', value: '200000-500000' },
  { label: '$500k – $1M', value: '500000-1000000' },
  { label: 'Over $1M', value: '1000000+' },
]

export default function SearchBar() {
  const navigate = useNavigate()
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Any Type')
  const [price, setPrice] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (type && type !== 'Any Type') params.set('type', type)
    if (price) params.set('price', price)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
    >
      {/* Location */}
      <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-xl px-3 py-2">
        <MapPin size={16} className="text-blue-500 shrink-0" />
        <input
          type="text"
          placeholder="City, neighborhood..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full text-sm outline-none placeholder-gray-400"
          aria-label="Location"
        />
      </div>

      {/* Type */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 min-w-36">
        <Home size={16} className="text-blue-500 shrink-0" />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full text-sm outline-none bg-transparent text-gray-700"
          aria-label="Property type"
        >
          {propertyTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 min-w-40">
        <DollarSign size={16} className="text-blue-500 shrink-0" />
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full text-sm outline-none bg-transparent text-gray-700"
          aria-label="Price range"
        >
          {priceRanges.map((r) => (
            <option key={r.label} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shrink-0"
      >
        <Search size={16} />
        Search
      </button>
    </form>
  )
}
