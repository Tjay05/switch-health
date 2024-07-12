import { ThemeProvider } from "styled-components";

// Font Imports
import { useFonts as useInter, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts as usePoppins, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useFonts as useOutfit, Outfit_400Regular, Outfit_500Medium, Outfit_700Bold } from '@expo-google-fonts/outfit';
import { useFonts as useSpaceGrotesk, SpaceGrotesk_400Regular, SpaceGrotesk_500Medium } from '@expo-google-fonts/space-grotesk';

// Page Imports
import { theme } from "@/src/infrastructure/theme";
import Navigation from "@/src/infrastructure/navigation";
import Loading from "@/src/components/loader";

export default function Index() {
  const [interLoaded] = useInter({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_700Bold
  });
  
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium, 
    Poppins_700Bold
  });
  
  const [outfitLoaded] = useOutfit({
    Outfit_400Regular,
    Outfit_500Medium, 
    Outfit_700Bold
  });
  
  const [spaceGroteskLoaded] = useSpaceGrotesk({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
  });

  if (!interLoaded || !poppinsLoaded || !outfitLoaded || !spaceGroteskLoaded) {
    return <Loading/>
  }  
  
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}