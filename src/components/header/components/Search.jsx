import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../../hooks/useDebounce';
import { fetchProductList } from '../../../stores/action/product.action';
import './Search.scss';

function Search() {
    const distpatch = useDispatch();
    const [valueSearch, setValeSearch] = useState('');

    const debounce = useDebounce(valueSearch, 500);
    const inputRef = useRef();

    const handleChangeSearch = (e) => {
        const valueSearch = e.target.value;
        if (!valueSearch.startsWith(' ')) {
            setValeSearch(valueSearch);
        }
    };
    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }

        distpatch(
            fetchProductList({
                page: 1,
                limit: 12,
                textSearch: debounce,
            })
        );
    }, [debounce]);

    return (
        <div className="search">
            <input
                ref={inputRef}
                value={valueSearch}
                className="input-search"
                type="text"
                placeholder="Tìm kiếm trên TK Shop "
                onChange={handleChangeSearch}
            />
            {!!valueSearch && (
                <button
                    className="circle-xmark"
                    onClick={() => {
                        setValeSearch('');
                        inputRef.current.focus();
                    }}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}
            <button className="search-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </button>
        </div>
    );
}

export default Search;
