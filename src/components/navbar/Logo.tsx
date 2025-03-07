
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link to="/">
        <img 
          src="/lovable-uploads/61910bfa-2da7-4781-a20b-d4620f3be4ab.png" 
          alt="Insurance House Logo" 
          className="h-28 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
