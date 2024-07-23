import React from "react";
import { useForm } from "../../hooks/useForm";
//import queryString from 'query-string' //Comentar para los tests
import { useLocation, useNavigate } from "react-router";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) ;

  const showError = (q.length > 0) && heroes.length ===0

  const{searchText,onInputChange} = useForm({
    searchText: q

  })

  const onSearchSubmit= (event)=>{
    event.preventDefault()
    //if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
            value={searchText}
            onChange={onInputChange}
              type="text"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '') ? <div className="alert alert-primary">
            Search a Hero
          </div> : (heroes.length === 0 ) && <div className="alert alert-danger">
           <b> No hero {q} </b>
          </div>
          } */}


          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? " ": "none"}}>
            Search a Hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display:showError ? "" : "none"}}>
           <b> No hero {q} </b>
          </div>
          

          {
            heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  );
};
