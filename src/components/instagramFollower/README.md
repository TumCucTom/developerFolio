# Instagram Follower Component

This component displays a live Instagram follower count with an animated counter effect.

## Current Implementation

The component currently uses mock data (1,250 followers) with a loading animation and counter effect.

## How to Integrate Real Instagram Data

### Option 1: Instagram Basic Display API (Recommended)
1. Create an Instagram Basic Display app at https://developers.facebook.com/
2. Get app approval from Facebook
3. Use the Instagram Basic Display API to fetch follower count
4. Replace the mock data in the `useEffect` with actual API calls

### Option 2: Third-party Services
- **Social Blade API**: Provides Instagram statistics
- **RapidAPI Instagram**: Various Instagram data endpoints
- **ScrapingBee**: Web scraping service for Instagram data

### Option 3: Manual Updates
For static portfolios, manually update the follower count in the component when needed.

## Example API Integration

```javascript
useEffect(() => {
  const fetchInstagramData = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/instagram/happyhealthyhols');
      const data = await response.json();
      setFollowerCount(data.followers);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
      // Fallback to mock data
      setFollowerCount(1250);
      setIsLoading(false);
    }
  };

  fetchInstagramData();
}, []);
```

## Styling

The component includes:
- Responsive design for mobile and desktop
- Dark mode support
- Hover effects and animations
- Instagram gradient colors
- Clickable link to the Instagram profile

## Customization

You can customize:
- Colors in `InstagramFollower.scss`
- Animation duration and effects
- Loading states
- Error handling
- API endpoints and data structure 