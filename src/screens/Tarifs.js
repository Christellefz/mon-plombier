import './Tarifs.css'

const Tarifs = () => {
  return (
    <div className='tarifsContainer'>
      <table>
        <caption>Tarifs</caption>
        <thead>
          <tr>
            <th>Intitulé</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody className='tarifstable'>
          <tr>
            <td>Prestation Jour par heure</td>
            <td>35€</td>
          </tr>
          <tr>
            <td>Prestation d'urgence par heure</td>
            <td>55€</td>
          </tr>
          <tr>
            <td>Installation sanitaire</td>
            <td>45€</td>
          </tr>
          <tr>
            <td>Forfait déplacement par km</td>
            <td>1€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Tarifs
