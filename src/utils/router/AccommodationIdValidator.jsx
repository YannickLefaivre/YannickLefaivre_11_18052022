import { useParams } from 'react-router-dom'
import AccommodationSheet from '../../routes/AccommodationSheet'
import NotFound from '../../routes/NotFound'

/* 
  After having tried several methods without success to display the 404 error page when the id present in the URL does not correspond to that of any accommodation. I searched in Workplace if the subject had already been discussed and I found this post https://openclassrooms.workplace.com/groups/1263248313731632/permalink/5174547962601628/ which allowed me to know what information to look for to solve this issue.

  First, I tried to use the proposed solutions but it didn't work for me so I looked elsewhere and while searching in the FAQs of the react router v6 doc, I found the solution: https://reactrouter.com/docs/en/v6/getting-started/faq#what-happened-to-regexp-routes-paths in part "Doing some sort of param validation".
  
  From there, I just created a regex that matches my problem. Each id is made up of 8 characters.
*/
export default function AccommodationIdValidator() {
  const { id } = useParams()

  if (id.match(/^[a-z0-9]{8}$/i) === null) {
    return <NotFound />
  }

  return <AccommodationSheet currentAccommodationId={id} />
}
