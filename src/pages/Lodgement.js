import SlideshowLodgement from "../components/SlideshowLodgement"
import InfosLodgement from "../components/InfosLodgement"
import ErrorBoundary from "../components/ErrorBoundary"

export function Lodgement() {
    return(
     <>
      <ErrorBoundary>
       <SlideshowLodgement />
        <InfosLodgement />
      </ErrorBoundary>
     </>
    )
}
