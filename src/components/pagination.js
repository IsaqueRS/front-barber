import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'
import "../components/modals/modalHours.css"
import { addDays, format, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { useState } from 'react';
import ReactPaginate from 'react-paginate'


function PaginationComp({ currentDates }) {

  const [pageNumbers, setPageNumbers] = useState(0); 
  const daysPerPage = 5
  const pagesVisited = pageNumbers * daysPerPage

  const getNext15Days = () => {
    const dates = [];
    const today = new Date();
  
    for (let i = 0; i < 15; i++) {
      const date = addDays(today, i);
      let formattedDate;
      if (i < 5) {
        // Para os primeiros 5 dias, formatamos como "seg", "ter", "qua" etc.
        formattedDate = format(date, 'EE', { locale: ptBR });
      } else {
        // Para os demais dias, formatamos como "dd/MM".
        formattedDate = format(date, 'dd/MM', { locale: ptBR });
      }
      dates.push({ date: formattedDate });
    }
    return dates;
  };  

  const dates = getNext15Days()

  const displayDays = dates.slice(pagesVisited, pagesVisited + daysPerPage).map((day) => {
    return (
      <li key={day.date} onClick={() => console.log('Clicked on', day.date)}>
            <button className='btn-days'>{day.date}</button>
      </li>
    )
  })

  const pageCount = Math.ceil(dates.length / daysPerPage)

  const changePage = ({selected}) => {
    setPageNumbers(selected)
  }
//  for(let i = 0; i<= Math.ceil(totalDays / postsPerDay); i++) {
//    pageNumbers.push(dates[i])
//    console.log(postsPerDay, totalDays)
//  }

  return (  
      <ul className='list-days'>
        <ul className="days">
        {displayDays}
        </ul>
        <div className="pagination-container">
        <ReactPaginate 
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
        </div>
      </ul>
  );
}
// <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(allDates.length / datesPerPage) - 1}>
//        Next &gt;
//</button>
//<button onClick={handlePreviousPage} disabled={currentPage === 0}>
//&lt; Previous
//</button>
//<button onClick={handleToday}>Today</button>

export default PaginationComp;