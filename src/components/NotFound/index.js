import {
  NotFoundDiv,
  NotFoundImg,
  NotFoundHead,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundDiv>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHead>Page Not Found</NotFoundHead>
      <NotFoundText>
        We are sorry, the page you requested could not be found
      </NotFoundText>
    </NotFoundDiv>
  </>
)

export default NotFound
