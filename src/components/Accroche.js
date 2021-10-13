import './Accroche.css'

import {
  FaComments,
  FaFileInvoiceDollar,
  FaRegCalendarAlt,
  FaStopwatch,
  FaUserCheck
} from 'react-icons/fa'

const Accroche = () => {
  return (
    <div className='accrocheContainer'>
      <section className='accroche'>
        <h1 className='accrocheMainTitle'>Excellence Plomberie</h1>
        <h2 className='accrocheSubtitle'>
          Rapidité | Efficacité | Choix rafiné
        </h2>
        <article className='accrocheArticle'>
          Et eodem impetu Domitianum praecipitem per scalas itidem funibus
          constrinxerunt, eosque coniunctos per ampla spatia civitatis acri
          raptavere discursu. iamque artuum et membrorum divulsa conpage supers
          corpora mortuorum ad ultimam truncata deformitatem velut exsaturati
          mox abiecerunt in flumen.
        </article>
      </section>
      <section className='services'>
        <span className='devis'>
          <FaFileInvoiceDollar /> <strong>Devis Gratuit</strong>
        </span>
        <span className='conseil'>
          <FaComments />
          <strong> Conseils personalisés</strong>
        </span>
        <span className='rapidité'>
          <FaStopwatch />
          <strong> Dépannage en 30 Minutes</strong>
        </span>
        <span className='disponibilité'>
          <FaRegCalendarAlt />
          <strong> 7 / 24</strong>
        </span>
        <span className='interlocuteur'>
          <FaUserCheck />
          <strong>Interlocuteur Unique</strong>
        </span>
      </section>
    </div>
  )
}
export default Accroche
