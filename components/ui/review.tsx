// ReviewTypes.ts
export interface ReviewProps {
    reviewer: string;
    occupation: string;
    review: string;
    date: string;
    location?: string;  // Optional property
  }
  
  
export const Review: React.FC<ReviewProps> = ({ 
    reviewer,
    occupation,
    review,
    date,
    location 
  }) => {
    // Generate a random pastel color for the avatar
    const generatePastelColor = (): string => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 80%)`;
    };
  
    // Get first letter of the reviewer's first name
    const getInitial = (): string => {
      return reviewer.split(' ')[0][0].toUpperCase();
    };
  
    return (
      <div className="flex flex-col items-start space-x-4 p-4 max-w-2xl rounded-lg border-2 border-gray-100">
        <div className='flex flex-row space-x-2'>
            <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold text-white"
                style={{ backgroundColor: generatePastelColor() }}
            >
                {getInitial()}
            </div>
            <div className="flex-1">
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{reviewer}</h3>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500">{date}</span>
                </div>
                
                <div className="text-sm text-gray-600 mt-1">
                    {occupation}
                    {location && (
                    <>
                        <span className="mx-1">·</span>
                        {location}
                    </>
                    )}
                </div>
                
            
            </div>
        </div>
        <p className="text-sm mt-2 text-gray-800">{review}</p>
      </div>
    );
  };
  
