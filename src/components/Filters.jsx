/* eslint-disable react/prop-types */
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { languageData, ratingData, timeData, yearData } from "../filterData";


const Filters = ({ data }) => {
    const {
        categories,
        category,
        setCategory,
        language,
        setLanguage,
        year,
        setYear,
        time,
        setTime,
        rating,
        setRating
    } = data

    const Filters = [
        {
            value: category,
            onChange: setCategory,
            items: categories?.length > 0 ? [{ title: "All Categories" }, ...categories] : [{ title: "No Category Found" }],
        },
        {
            value: year,
            onChange: setYear,
            items: yearData,
        },
        {
            value: time,
            onChange: setTime,
            items: timeData,
        },
        {
            value: rating,
            onChange: setRating,
            items: ratingData,
        },
        {
            value: language,
            onChange: setLanguage,
            items: languageData,
        }
    ]

    // useEffect(() => {
    //     if (category?.title !== "No Category Found") {
    //         dispatch(getAllMoviesAction({

    //         }))
    //     }
    // },[category, language, time, rating, year, dispatch])

    return (
        <div className="my-6 bg-dry border text-dryGray border-gray-800 grid grid-cols-2 md:grid-cols-4 lg:gap-12 gap-2 rounded p-6">
            {Filters.map((item, index) => (
                <Listbox key={index} value={item.value} onChange={item.onChange}>
                    <div className="relative">
                        <Listbox.Button className={'border border-gray-800 relative bg-main text-white w-full rounded-lg text-left text-xs cursor-default py-4 px-6 pr-10'}>
                            <span className="block truncate">
                                {item?.value?.title}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <FaAngleDown className="w-4 h-4" aria-hidden={true} />
                            </span>
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition duration-100 ease-in" leaveFrom="opacity-0">
                            <Listbox.Options className={'absolute z-20 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'}>
                                {
                                    item?.items?.map((item, i) => (
                                        <Listbox.Option key={i} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"}`} value={item}>
                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>{item.title}</span>
                                                    {
                                                        selected ?
                                                            (
                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                                    <FaCheck className="w-3 h-3" aria-hidden={true} />
                                                                </span>
                                                            )
                                                            :
                                                            null
                                                    }
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))
                                }
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            ))}
        </div>
    )
}

export default Filters

