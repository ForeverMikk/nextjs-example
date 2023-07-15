"use client"
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { SearchManufacturerProps } from '@/types';
import { manufacturers } from '@/constants';


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

  const [query, setQuery] = useState('');

  const filteredManufacturers = (
    query === "" // Verificas si existe el quiery
      ? manufacturers // Si no existe regresas todas las marcas de carros
      : manufacturers.filter((item) => ( //Si existe el quiery regresas las coincidencias
        item.toLowerCase()
        .replace(/\s+/g, "") //Remplazamos los espacios de la lista por string vacios
        .includes(query.toLowerCase().replace(/\s+/g, "")) //remplazamos los espacios del quiery por string vacio
      )))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition as={Fragment}
            leave='transition easi-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({active}) => `
                    relative search-manufacturer__option 
                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer