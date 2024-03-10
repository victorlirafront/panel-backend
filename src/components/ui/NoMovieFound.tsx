import StyledNoMovieFound from '../styles/NoMovieFound';
import Image from 'next/image';

function NoMovieFound() {
  return (
    <StyledNoMovieFound>
      <div>
        <Image width={250} height={250} src="./404.svg" alt="no movie was found" />
        <h1>No Movie Was Found</h1>
      </div>
    </StyledNoMovieFound>
  );
}

export default NoMovieFound;