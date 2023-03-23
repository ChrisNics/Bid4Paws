const breeds = [
  {
    value: 'akbash',
    label: 'Akbash',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Akba%C5%9F_cinsi_k%C3%B6pek.jpg/220px-Akba%C5%9F_cinsi_k%C3%B6pek.jpg'
  },
  {
    value: 'akita',
    label: 'Akita',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Akita_Collage.png/220px-Akita_Collage.png'
  },
  {
    value: 'aksaray malaklisi',
    label: 'Aksaray Malaklisi',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Aksaray_malaklisi_beto.jpg/220px-Aksaray_malaklisi_beto.jpg'
  },
  {
    value: 'alano español',
    label: 'Alano Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spanishalanobrindle4.jpg/220px-Spanishalanobrindle4.jpg'
  },
  {
    value: 'alapaha blue blood bulldog',
    label: 'Alapaha Blue Blood Bulldog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alapaha_Blue-Blood_Bulldog.jpg/220px-Alapaha_Blue-Blood_Bulldog.jpg'
  },
  {
    value: 'alaskan husky',
    label: 'Alaskan Husky',
    origin: 'United States (Alaska)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Alaskan_husky_at_Riley_Creek_Campground_%2812712975923%29.jpg/220px-Alaskan_husky_at_Riley_Creek_Campground_%2812712975923%29.jpg'
  },
  {
    value: 'alaskan klee kai',
    label: 'Alaskan Klee Kai',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/WOWAKK-Kukai-Alaskan-Klee-Kai.jpg/220px-WOWAKK-Kukai-Alaskan-Klee-Kai.jpg'
  },
  {
    value: 'alaskan malamute',
    label: 'Alaskan Malamute',
    origin: 'Alaska',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alaskan_Malamute.jpg/235px-Alaskan_Malamute.jpg'
  },
  {
    value: 'alopekis',
    label: 'Alopekis',
    origin: 'Greece mainly in the Serres region.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alopekis_white_male.jpg/220px-Alopekis_white_male.jpg'
  },
  {
    value: 'alpine dachsbracke',
    label: 'Alpine Dachsbracke',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alpejski_go%C5%84czy_kr%C3%B3tkono%C5%BCny_g99.jpg/220px-Alpejski_go%C5%84czy_kr%C3%B3tkono%C5%BCny_g99.jpg'
  },
  {
    value: 'american bulldog',
    label: 'American Bulldog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Faithfullbull_Spike_of_Mightybull.jpg/220px-Faithfullbull_Spike_of_Mightybull.jpg'
  },
  {
    value: 'american bully',
    label: 'American Bully',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Champion_Charlie_Muscles_%282%29.jpg/220px-Champion_Charlie_Muscles_%282%29.jpg'
  },
  {
    value: 'american cocker spaniel',
    label: 'American Cocker Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PointbreakHoneyimHome.jpg/220px-PointbreakHoneyimHome.jpg'
  },
  {
    value: 'american english coonhound',
    label: 'American English Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/English_Coonhound.jpg/220px-English_Coonhound.jpg'
  },
  {
    value: 'american eskimo dog',
    label: 'American Eskimo Dog',
    origin: 'United StatesGermany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Eskimo_Dog_1.jpg/220px-American_Eskimo_Dog_1.jpg'
  },
  {
    value: 'american foxhound',
    label: 'American Foxhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/AmericanFoxhound2.jpg/220px-AmericanFoxhound2.jpg'
  },
  {
    value: 'american hairless terrier',
    label: 'American Hairless Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Aht-sable%26white3.jpg/220px-Aht-sable%26white3.jpg'
  },
  {
    value: 'american leopard hound',
    label: 'American Leopard Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/American_Leopard_Hound.jpg/220px-American_Leopard_Hound.jpg'
  },
  {
    value: 'american pit bull terrier',
    label: 'American Pit Bull Terrier',
    origin: 'USA',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/IMG-20210617-WA0002.jpg/220px-IMG-20210617-WA0002.jpg'
  },
  {
    value: 'american staffordshire terrier',
    label: 'American Staffordshire Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AMERICAN_STAFFORDSHIRE_TERRIER%2C_Zican%E2%80%99s_Bz_Ez_Dragon_%2824208348891%29.2.jpg/220px-AMERICAN_STAFFORDSHIRE_TERRIER%2C_Zican%E2%80%99s_Bz_Ez_Dragon_%2824208348891%29.2.jpg'
  },
  {
    value: 'american water spaniel',
    label: 'American Water Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chien_d%27eau_americain_champion_1.JPG/220px-Chien_d%27eau_americain_champion_1.JPG'
  },
  {
    value: 'anglo-français de petite vénerie',
    label: 'Anglo-Français de Petite Vénerie',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Anglo-Fran%C3%A7ais_de_petite_v%C3%A9nerie.jpg'
  },
  {
    value: 'appenzeller sennenhund',
    label: 'Appenzeller Sennenhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Eisa_Kessy_v_Br%C3%BCnggberg.jpg/220px-Eisa_Kessy_v_Br%C3%BCnggberg.jpg'
  },
  {
    value: 'ariège pointer',
    label: 'Ariège Pointer',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pointer_of_Ariege_from_1915.JPG/220px-Pointer_of_Ariege_from_1915.JPG'
  },
  {
    value: 'ariegeois',
    label: 'Ariegeois',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ariegeois.jpg/220px-Ariegeois.jpg'
  },
  {
    value: 'armant',
    label: 'Armant',
    origin: 'Egypt',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Armant_dog%2C_with_some_orange_stuff_and_trees_in_background.jpg'
  },
  {
    value: 'armenian gampr',
    label: 'Armenian Gampr',
    origin: 'Armenia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Armenian_Gampr_01.jpg/220px-Armenian_Gampr_01.jpg'
  },
  {
    value: 'artois hound',
    label: 'Artois Hound',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Artois_from_1915.JPG/220px-Artois_from_1915.JPG'
  },
  {
    value: 'assyrian mastiff',
    label: 'Assyrian Mastiff',
    origin: 'Assyria',
    img: 'Not available'
  },
  {
    value: 'australian cattle dog',
    label: 'Australian Cattle Dog',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ACD-blue-spud.jpg/220px-ACD-blue-spud.jpg'
  },
  {
    value: 'australian kelpie',
    label: 'Australian Kelpie',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hilu_the_Australian_Kelpie_dog.jpg/220px-Hilu_the_Australian_Kelpie_dog.jpg'
  },
  {
    value: 'australian shepherd',
    label: 'Australian Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Australian_Shepherd_red_bi.JPG/220px-Australian_Shepherd_red_bi.JPG'
  },
  {
    value: 'australian stumpy tail cattle dog',
    label: 'Australian Stumpy Tail Cattle Dog',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Australian_Stumpy_Tail_Cattle_Dog.jpg/220px-Australian_Stumpy_Tail_Cattle_Dog.jpg'
  },
  {
    value: 'australian terrier',
    label: 'Australian Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Australian_Terrier_adult_male.jpg/220px-Australian_Terrier_adult_male.jpg'
  },
  {
    value: 'austrian black and tan hound',
    label: 'Austrian Black and Tan Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Brandlbracke.JPG/220px-Brandlbracke.JPG'
  },
  {
    value: 'austrian pinscher',
    label: 'Austrian Pinscher',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pinczer_austiacki_678.jpg/220px-Pinczer_austiacki_678.jpg'
  },
  {
    value: 'azawakh',
    label: 'Azawakh',
    origin: 'Mali, Niger, Burkina Faso',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bistrita_2015_%2822%29.jpg/220px-Bistrita_2015_%2822%29.jpg'
  },
  {
    value: 'bắc hà dog',
    label: 'Bắc Hà dog',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/B%E1%BA%AFc_H%C3%A0_dog_side.jpg/220px-B%E1%BA%AFc_H%C3%A0_dog_side.jpg'
  },
  {
    value: 'bakharwal dog',
    label: 'Bakharwal dog',
    origin: 'Indian subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bakarwal.jpg/220px-Bakarwal.jpg'
  },
  {
    value: 'banjara hound',
    label: 'Banjara Hound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Banjara_from_1915.JPG/220px-Banjara_from_1915.JPG'
  },
  {
    value: 'bankhar dog',
    label: 'Bankhar Dog',
    origin: 'Russia, Mongolia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Hotosho-1.jpg/220px-Hotosho-1.jpg'
  },
  {
    value: 'barak hound',
    label: 'Barak hound',
    origin: 'Bosnia and Herzegovina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg/220px-BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg'
  },
  {
    value: 'barbado da terceira',
    label: 'Barbado da Terceira',
    origin: 'Azores, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Barbado_da_Terceira_%28young_female%29.jpg/220px-Barbado_da_Terceira_%28young_female%29.jpg'
  },
  {
    value: 'barbet',
    label: 'Barbet',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Chien_de_race_Barbet.jpg/220px-Chien_de_race_Barbet.jpg'
  },
  {
    value: 'basenji',
    label: 'Basenji',
    origin: 'Democratic Republic of the Congo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Basenji_Profile_%28loosercrop%29.jpg/220px-Basenji_Profile_%28loosercrop%29.jpg'
  },
  {
    value: 'basque shepherd dog',
    label: 'Basque Shepherd Dog',
    origin: 'Basque Country (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pastor_vasco_m_14months_loby_3018.jpg/220px-Pastor_vasco_m_14months_loby_3018.jpg'
  },
  {
    value: 'basset artésien normand',
    label: 'Basset Artésien Normand',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg/220px-Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg'
  },
  {
    value: 'basset bleu de gascogne',
    label: 'Basset Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Basset_bleu_de_Gascogne.jpg/220px-Basset_bleu_de_Gascogne.jpg'
  },
  {
    value: 'basset fauve de bretagne',
    label: 'Basset Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Basset_Fauve_de_Bretagne_600.jpg/220px-Basset_Fauve_de_Bretagne_600.jpg'
  },
  {
    value: 'basset hound',
    label: 'Basset Hound',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BassetHound_profil.jpg/220px-BassetHound_profil.jpg'
  },
  {
    value: 'bavarian mountain hound',
    label: 'Bavarian Mountain Hound',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Zoran_Spod_Ruskiej_Granicy_the_Bavarian_Mountain_Hound.jpg/220px-Zoran_Spod_Ruskiej_Granicy_the_Bavarian_Mountain_Hound.jpg'
  },
  {
    value: 'airedale terrier',
    label: 'Airedale Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Airedale_Terrier.jpg/220px-Airedale_Terrier.jpg'
  },
  {
    value: 'beagle-harrier',
    label: 'Beagle-Harrier',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Beagle_harrier.JPG/220px-Beagle_harrier.JPG'
  },
  {
    value: 'bearded collie',
    label: 'Bearded Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bearded_Collie_600.jpg/220px-Bearded_Collie_600.jpg'
  },
  {
    value: 'beauceron',
    label: 'Beauceron',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Owczarek_francuski_beauceron_009pl.jpg/220px-Owczarek_francuski_beauceron_009pl.jpg'
  },
  {
    value: 'bedlington terrier',
    label: 'Bedlington Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Boutchie_apres_championnat_004.JPG/220px-Boutchie_apres_championnat_004.JPG'
  },
  {
    value: 'belgian shepherd',
    label: 'Belgian Shepherd',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tervuren.jpg/220px-Tervuren.jpg'
  },
  {
    value: 'bergamasco shepherd',
    label: 'Bergamasco Shepherd',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ortensia_di_Valle_Scrivia.jpg/220px-Ortensia_di_Valle_Scrivia.jpg'
  },
  {
    value: 'berger picard',
    label: 'Berger Picard',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Picard_Delice_Stacked.jpg/220px-Picard_Delice_Stacked.jpg'
  },
  {
    value: 'bernese mountain dog',
    label: 'Bernese Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Othello.jpg/220px-Othello.jpg'
  },
  {
    value: 'bichon frisé',
    label: 'Bichon Frisé',
    origin: 'Canary Islands (Spain)Belgium/France (later development)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bichon_Fris%C3%A9_-_studdogbichon.jpg/220px-Bichon_Fris%C3%A9_-_studdogbichon.jpg'
  },
  {
    value: 'billy',
    label: 'Billy',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Poitou_Hound_from_1915.JPG/220px-Poitou_Hound_from_1915.JPG'
  },
  {
    value: 'black and tan coonhound',
    label: 'Black and Tan Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Black_and_Tan_Coonhound.jpg/220px-Black_and_Tan_Coonhound.jpg'
  },
  {
    value: 'black norwegian elkhound',
    label: 'Black Norwegian Elkhound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/BlackNorwegianElkhound.jpg/220px-BlackNorwegianElkhound.jpg'
  },
  {
    value: 'black russian terrier',
    label: 'Black Russian Terrier',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Russianblack.jpg/220px-Russianblack.jpg'
  },
  {
    value: 'black mouth cur',
    label: 'Black Mouth Cur',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Black_mouth_cur-10.jpg/220px-Black_mouth_cur-10.jpg'
  },
  {
    value: 'bloodhound',
    label: 'Bloodhound',
    origin: 'Belgium, France &United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bloodhound_Erland22.jpg/220px-Bloodhound_Erland22.jpg'
  },
  {
    value: 'blue lacy',
    label: 'Blue Lacy',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BlueLacyPhoto1.jpg/220px-BlueLacyPhoto1.jpg'
  },
  {
    value: 'blue picardy spaniel',
    label: 'Blue Picardy Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Epagneul_bleu_de_picardie_868.jpg/220px-Epagneul_bleu_de_picardie_868.jpg'
  },
  {
    value: 'bluetick coonhound',
    label: 'Bluetick Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/BluetickCoonhound.jpg/220px-BluetickCoonhound.jpg'
  },
  {
    value: 'boerboel',
    label: 'Boerboel',
    origin: 'South Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Boerboel_fawn_border.jpg/220px-Boerboel_fawn_border.jpg'
  },
  {
    value: 'bohemian shepherd',
    label: 'Bohemian Shepherd',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/OREADY_KROSANDRA_%2814%29.JPG/220px-OREADY_KROSANDRA_%2814%29.JPG'
  },
  {
    value: 'bolognese',
    label: 'Bolognese',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DocFile_Bolognese.jpg/220px-DocFile_Bolognese.jpg'
  },
  {
    value: 'border collie',
    label: 'Border Collie',
    origin: 'Anglo-Scottish border',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Blue_Merle_Border_Collie._Female.jpg/220px-Blue_Merle_Border_Collie._Female.jpg'
  },
  {
    value: 'border terrier',
    label: 'Border Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Border_Terrier.jpg/220px-Border_Terrier.jpg'
  },
  {
    value: 'borzoi',
    label: 'Borzoi',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg/220px-Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg'
  },
  {
    value: 'boston terrier',
    label: 'Boston Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston-terrier-carlos-de.JPG/220px-Boston-terrier-carlos-de.JPG'
  },
  {
    value: 'bouvier des ardennes',
    label: 'Bouvier des Ardennes',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Boyero-de-las-ardenas7.jpg/220px-Boyero-de-las-ardenas7.jpg'
  },
  {
    value: 'bouvier des flandres',
    label: 'Bouvier des Flandres',
    origin: 'Belgium (Flanders); France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bouvier.JPG/220px-Bouvier.JPG'
  },
  {
    value: 'boxer',
    label: 'Boxer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Male_fawn_Boxer_undocked.jpg/220px-Male_fawn_Boxer_undocked.jpg'
  },
  {
    value: 'boykin spaniel',
    label: 'Boykin Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Boykin_Spaniel_April_Jet.jpg/220px-Boykin_Spaniel_April_Jet.jpg'
  },
  {
    value: 'bracco italiano',
    label: 'Bracco Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Giotto_BI.jpg/220px-Giotto_BI.jpg'
  },
  {
    value: "braque d'auvergne",
    label: "Braque d'Auvergne",
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Braque_d_Auvergne.jpg/220px-Braque_d_Auvergne.jpg'
  },
  {
    value: 'braque du bourbonnais',
    label: 'Braque du Bourbonnais',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Braque_du_Bourbonnais.jpg/220px-Braque_du_Bourbonnais.jpg'
  },
  {
    value: 'braque français',
    label: 'Braque Français',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0805_braque_francais_text.jpg/220px-0805_braque_francais_text.jpg'
  },
  {
    value: 'braque saint-germain',
    label: 'Braque Saint-Germain',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Braque_saint-germain_666.jpg/220px-Braque_saint-germain_666.jpg'
  },
  {
    value: 'briard',
    label: 'Briard',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Briard_fauve.JPG/220px-Briard_fauve.JPG'
  },
  {
    value: 'briquet griffon vendéen',
    label: 'Briquet Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Briquet_Griffon_Vendeen.jpg/220px-Briquet_Griffon_Vendeen.jpg'
  },
  {
    value: 'brittany',
    label: 'Brittany',
    origin: 'Brittany, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Brittany_standing.jpg/220px-American_Brittany_standing.jpg'
  },
  {
    value: 'broholmer',
    label: 'Broholmer',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Male_Broholmer.jpg/220px-Male_Broholmer.jpg'
  },
  {
    value: 'bruno jura hound',
    label: 'Bruno Jura Hound',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/09057110_Jura_Laufhund.jpg/220px-09057110_Jura_Laufhund.jpg'
  },
  {
    value: 'brussels griffon',
    label: 'Brussels Griffon',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Monkey_Bizniz_Drama_Queen.jpg/220px-Monkey_Bizniz_Drama_Queen.jpg'
  },
  {
    value: 'bucovina shepherd dog',
    label: 'Bucovina Shepherd Dog',
    origin: 'Romania (Southeastern Europe)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bucovina_Sheepdog.jpg/220px-Bucovina_Sheepdog.jpg'
  },
  {
    value: 'bull arab',
    label: 'Bull Arab',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bull_Arab_%28dog%29.jpg/220px-Bull_Arab_%28dog%29.jpg'
  },
  {
    value: 'bull terrier',
    label: 'Bull Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bullterrier-3453301920.jpg/220px-Bullterrier-3453301920.jpg'
  },
  {
    value: 'bulldog',
    label: 'Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/220px-Bulldog_inglese.jpg'
  },
  {
    value: 'bullmastiff',
    label: 'Bullmastiff',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bullmastiff_edited.JPG/220px-Bullmastiff_edited.JPG'
  },
  {
    value: 'bully kutta',
    label: 'Bully Kutta',
    origin: 'Indian Subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/BullyDogs.Pakistan.jpg/220px-BullyDogs.Pakistan.jpg'
  },
  {
    value: 'burgos pointer',
    label: 'Burgos Pointer',
    origin: 'Castile and León (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Burgos_Pointer_or_Perdiguero_de_Burgos.JPG/220px-Burgos_Pointer_or_Perdiguero_de_Burgos.JPG'
  },
  {
    value: 'ca mè mallorquí',
    label: 'Ca Mè Mallorquí',
    origin: 'Spain (Majorca, Balearic Islands)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg/220px-Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg'
  },
  {
    value: 'ca de bou',
    label: 'Ca de Bou',
    origin: 'Spain (Majorca)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ZarcoBruno2015.jpg/220px-ZarcoBruno2015.jpg'
  },
  {
    value: 'cairn terrier',
    label: 'Cairn Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cairn-Terrier-Garten1.jpg/220px-Cairn-Terrier-Garten1.jpg'
  },
  {
    value: 'calupoh',
    label: 'Calupoh',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Movimiento_Calupoh.jpg/220px-Movimiento_Calupoh.jpg'
  },
  {
    value: 'campeiro bulldog',
    label: 'Campeiro Bulldog',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Buldogue_Campeiro.jpg/220px-Buldogue_Campeiro.jpg'
  },
  {
    value: 'can de chira',
    label: 'Can de Chira',
    origin: 'Aragon (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Can_de_Chira_antiguo2.jpg/220px-Can_de_Chira_antiguo2.jpg'
  },
  {
    value: 'can de palleiro',
    label: 'Can de Palleiro',
    origin: 'Galicia, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Palleiro1.JPG/220px-Palleiro1.JPG'
  },
  {
    value: 'canaan dog',
    label: 'Canaan Dog',
    origin: 'Middle East',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/CanaanDogChakede.jpg/220px-CanaanDogChakede.jpg'
  },
  {
    value: 'canadian eskimo dog',
    label: 'Canadian Eskimo Dog',
    origin: 'Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spoonsced.jpg/220px-Spoonsced.jpg'
  },
  {
    value: 'cane corso',
    label: 'Cane Corso',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CaneCorso_%2823%29.jpg/220px-CaneCorso_%2823%29.jpg'
  },
  {
    value: 'cane di oropa',
    label: 'Cane di Oropa',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'cane paratore',
    label: 'Cane Paratore',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_Paratore.jpg/220px-Cane_Paratore.jpg'
  },
  {
    value: 'cantabrian water dog',
    label: 'Cantabrian Water Dog',
    origin: 'Cantabria, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg/220px-Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg'
  },
  {
    value: 'cão da serra de aires',
    label: 'Cão da Serra de Aires',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cao_de_Serra_de_Aires600.jpg/220px-Cao_de_Serra_de_Aires600.jpg'
  },
  {
    value: 'cão de castro laboreiro',
    label: 'Cão de Castro Laboreiro',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cao_de_Castro_Laboreiro_Ruede.jpg/220px-Cao_de_Castro_Laboreiro_Ruede.jpg'
  },
  {
    value: 'cão de gado transmontano',
    label: 'Cão de Gado Transmontano',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TRANSMONTANO.jpg/220px-TRANSMONTANO.jpg'
  },
  {
    value: 'cão fila de são miguel',
    label: 'Cão Fila de São Miguel',
    origin: 'São Miguel Island, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg/220px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg'
  },
  {
    value: 'cardigan welsh corgi',
    label: 'Cardigan Welsh Corgi',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cardigan_Welsh_Corgi%2C_Profile.png/220px-Cardigan_Welsh_Corgi%2C_Profile.png'
  },
  {
    value: 'carea leonés',
    label: 'Carea Leonés',
    origin: 'León (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Carea_Leon%C3%A9s1_cropped.jpg/220px-Carea_Leon%C3%A9s1_cropped.jpg'
  },
  {
    value: 'carolina dog',
    label: 'Carolina Dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dakota%2C_the_Dixie_Dingo_%28or_Carolina_Dog%29.jpg/220px-Dakota%2C_the_Dixie_Dingo_%28or_Carolina_Dog%29.jpg'
  },
  {
    value: 'carpathian shepherd dog',
    label: 'Carpathian Shepherd Dog',
    origin: 'Romania',
    img: 'Not available'
  },
  {
    value: 'catahoula leopard dog',
    label: 'Catahoula Leopard Dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/02._Coahoma_Arkansas_Logan.jpg/220px-02._Coahoma_Arkansas_Logan.jpg'
  },
  {
    value: 'catalan sheepdog',
    label: 'Catalan Sheepdog',
    origin: 'Catalonia (Spain)Andorra',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gos-d%27Atura-Catala.jpg/220px-Gos-d%27Atura-Catala.jpg'
  },
  {
    value: 'caucasian shepherd dog',
    label: 'Caucasian Shepherd Dog',
    origin: 'Caucasus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Owczarek_kaukaski_65556.jpg/220px-Owczarek_kaukaski_65556.jpg'
  },
  {
    value: 'cavalier king charles spaniel',
    label: 'Cavalier King Charles Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CarterBIS.Tiki.13.6.09.jpg/220px-CarterBIS.Tiki.13.6.09.jpg'
  },
  {
    value: 'central asian shepherd dog',
    label: 'Central Asian Shepherd Dog',
    origin: 'Central Asia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/220px-2.CAO_in_Hungary.jpg'
  },
  {
    value: 'cesky fousek',
    label: 'Cesky Fousek',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Czeski_fousek_777.jpg/220px-Czeski_fousek_777.jpg'
  },
  {
    value: 'cesky terrier',
    label: 'Cesky Terrier',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Terier_czeski_suka_2009_pl2.jpg/220px-Terier_czeski_suka_2009_pl2.jpg'
  },
  {
    value: 'chesapeake bay retriever',
    label: 'Chesapeake Bay Retriever',
    origin: 'United States of America',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/CH_Chesapeake.jpg/220px-CH_Chesapeake.jpg'
  },
  {
    value: 'chien français blanc et noir',
    label: 'Chien Français Blanc et Noir',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fran%C3%A7ais_noir_et_blanc.JPG/220px-Fran%C3%A7ais_noir_et_blanc.JPG'
  },
  {
    value: 'chien français blanc et orange',
    label: 'Chien Français Blanc et Orange',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Grand_Anglo-Fran%C3%A7ais_Blanc_Et_Orange.jpg/220px-Grand_Anglo-Fran%C3%A7ais_Blanc_Et_Orange.jpg'
  },
  {
    value: 'chien français tricolore',
    label: 'Chien Français Tricolore',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Frenchhoundtricolore.jpg/220px-Frenchhoundtricolore.jpg'
  },
  {
    value: 'chihuahua',
    label: 'Chihuahua',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chihuahua1_bvdb.jpg/220px-Chihuahua1_bvdb.jpg'
  },
  {
    value: 'chilean terrier',
    label: 'Chilean Terrier',
    origin: 'Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Fox_terrier_chileno.JPG/220px-Fox_terrier_chileno.JPG'
  },
  {
    value: 'chinese crested dog',
    label: 'Chinese Crested Dog',
    origin: 'Africa ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/IndyStands.jpg/220px-IndyStands.jpg'
  },
  {
    value: 'chinook',
    label: 'Chinook',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mountan_Laurel_Ajax_the_Chinook_dog.jpg/220px-Mountan_Laurel_Ajax_the_Chinook_dog.jpg'
  },
  {
    value: 'chippiparai',
    label: 'Chippiparai',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/A_male_chippiparai.jpg/220px-A_male_chippiparai.jpg'
  },
  {
    value: 'chongqing dog',
    label: 'Chongqing dog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chinese_Chongqing_Dog_H%C3%BCndin.jpg/220px-Chinese_Chongqing_Dog_H%C3%BCndin.jpg'
  },
  {
    value: 'chortai',
    label: 'Chortai',
    origin: 'Ukraine',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hortaya_Borzaya.jpg/220px-Hortaya_Borzaya.jpg'
  },
  {
    value: 'chow chow',
    label: 'Chow Chow',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ChowChow2Szczecin.jpg/220px-ChowChow2Szczecin.jpg'
  },
  {
    value: 'chukotka sled dog',
    label: 'Chukotka sled dog',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lorino_7_2013-08-04.jpg/220px-Lorino_7_2013-08-04.jpg'
  },
  {
    value: 'cimarrón uruguayo',
    label: 'Cimarrón Uruguayo',
    origin: 'Uruguay',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cimarron_uruguayo.png/220px-Cimarron_uruguayo.png'
  },
  {
    value: "cirneco dell'etna",
    label: "Cirneco dell'Etna",
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cirneco_dell_Etna_611.jpg/220px-Cirneco_dell_Etna_611.jpg'
  },
  {
    value: 'clumber spaniel',
    label: 'Clumber Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Clumber_spaniel_rybnik_kamien_pppl.jpg/220px-Clumber_spaniel_rybnik_kamien_pppl.jpg'
  },
  {
    value: 'colombian fino hound',
    label: 'Colombian fino hound',
    origin: 'Colombia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Colombian_Fino_Hound.jpg/220px-Colombian_Fino_Hound.jpg'
  },
  {
    value: 'continental bulldog',
    label: 'Continental bulldog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pitsch-Dog.jpg/220px-Pitsch-Dog.jpg'
  },
  {
    value: 'coton de tulear',
    label: 'Coton de Tulear',
    origin: 'Madagascar',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coton_de_Tular_1.jpg/220px-Coton_de_Tular_1.jpg'
  },
  {
    value: 'cretan hound',
    label: 'Cretan Hound',
    origin: 'Greece (Crete)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kritikosichnilatis_1.jpg/220px-Kritikosichnilatis_1.jpg'
  },
  {
    value: 'croatian sheepdog',
    label: 'Croatian Sheepdog',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/GeraHojda09112055ZG.jpeg/220px-GeraHojda09112055ZG.jpeg'
  },
  {
    value: 'curly-coated retriever',
    label: 'Curly-Coated Retriever',
    origin: 'United Kingdom - England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Curly_Coated_Retriever.jpg/220px-Curly_Coated_Retriever.jpg'
  },
  {
    value: 'cursinu',
    label: 'Cursinu',
    origin: 'Corsica (France)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cursinu_1.jpg/220px-Cursinu_1.jpg'
  },
  {
    value: 'czechoslovakian wolfdog',
    label: 'Czechoslovakian Wolfdog',
    origin: 'Czechoslovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TWH-jolly.JPG/220px-TWH-jolly.JPG'
  },
  {
    value: 'dachshund',
    label: 'Dachshund',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/220px-Short-haired-Dachshund.jpg'
  },
  {
    value: 'dalmatian',
    label: 'Dalmatian',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dalmatiner_2.jpg/220px-Dalmatiner_2.jpg'
  },
  {
    value: 'dandie dinmont terrier',
    label: 'Dandie Dinmont Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dandie_Dinmont_Terrier_600.jpg/220px-Dandie_Dinmont_Terrier_600.jpg'
  },
  {
    value: 'danish spitz',
    label: 'Danish Spitz',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dansk-spids.jpg/220px-Dansk-spids.jpg'
  },
  {
    value: 'danish-swedish farmdog',
    label: 'Danish-Swedish Farmdog',
    origin: 'Denmark and Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Danish_Farm_Dog1604fxcr_wb.jpg/220px-Danish_Farm_Dog1604fxcr_wb.jpg'
  },
  {
    value: 'denmark feist',
    label: 'Denmark Feist',
    origin: 'United States',
    img: 'Not available'
  },
  {
    value: 'dingo',
    label: 'Dingo',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'dobermann',
    label: 'Dobermann',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/220px-Dobermann_handling.jpg'
  },
  {
    value: 'dogo argentino',
    label: 'Dogo Argentino',
    origin: 'Argentina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/0Dogo-argentino-22122251920.jpg/220px-0Dogo-argentino-22122251920.jpg'
  },
  {
    value: 'dogo guatemalteco',
    label: 'Dogo Guatemalteco',
    origin: 'Guatemala',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Eggon_Lasal.jpg/220px-Eggon_Lasal.jpg'
  },
  {
    value: 'dogo sardesco',
    label: 'Dogo Sardesco',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'dogue brasileiro',
    label: 'Dogue Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Doguebrasileiro.jpg/220px-Doguebrasileiro.jpg'
  },
  {
    value: 'dogue de bordeaux',
    label: 'Dogue de Bordeaux',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/French_Mastiff_female_4.jpg/220px-French_Mastiff_female_4.jpg'
  },
  {
    value: 'donggyeongi',
    label: 'Donggyeongi',
    origin: 'Gyeongju, South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Donggyeongi.jpg/220px-Donggyeongi.jpg'
  },
  {
    value: 'drentse patrijshond',
    label: 'Drentse Patrijshond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Drentse_Patrijshond.jpg/220px-Drentse_Patrijshond.jpg'
  },
  {
    value: 'drever',
    label: 'Drever',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Drever_NUCh_Tanjo.jpg/220px-Drever_NUCh_Tanjo.jpg'
  },
  {
    value: 'dunker',
    label: 'Dunker',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dunker.jpg/220px-Dunker.jpg'
  },
  {
    value: 'dutch shepherd',
    label: 'Dutch Shepherd',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Short-haired_Dutch_Shepherd%C2%A9CaroleField.jpg/220px-Short-haired_Dutch_Shepherd%C2%A9CaroleField.jpg'
  },
  {
    value: 'dutch smoushond',
    label: 'Dutch Smoushond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hollandse_Smoushond_Amsterdam_cropped.jpg/220px-Hollandse_Smoushond_Amsterdam_cropped.jpg'
  },
  {
    value: 'east siberian laika',
    label: 'East Siberian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/East_Siberian_Laika.jpg/220px-East_Siberian_Laika.jpg'
  },
  {
    value: 'east european shepherd',
    label: 'East European Shepherd',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vostochno_Evropeiskaya_Ovcharka.jpg/220px-Vostochno_Evropeiskaya_Ovcharka.jpg'
  },
  {
    value: 'ecuadorian hairless dog',
    label: 'Ecuadorian Hairless Dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'english foxhound',
    label: 'English Foxhound',
    origin: 'Great Britain - England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/English_Foxhound_portrait.jpg/220px-English_Foxhound_portrait.jpg'
  },
  {
    value: 'english mastiff',
    label: 'English Mastiff',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Westgort_Anticipation_17_months.JPG/220px-Westgort_Anticipation_17_months.JPG'
  },
  {
    value: 'english setter',
    label: 'English Setter',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/EnglishSetter9_fx_wb.jpg/220px-EnglishSetter9_fx_wb.jpg'
  },
  {
    value: 'english shepherd',
    label: 'English Shepherd',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TricolorEnglishShepherdDog.jpg/220px-TricolorEnglishShepherdDog.jpg'
  },
  {
    value: 'english springer spaniel',
    label: 'English Springer Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/English_Springer_Spaniel_in_Tallinn.JPG/220px-English_Springer_Spaniel_in_Tallinn.JPG'
  },
  {
    value: 'english toy terrier (black & tan)',
    label: 'English Toy Terrier (Black & Tan)',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/English_Toy_Terrier_600_01.jpg/220px-English_Toy_Terrier_600_01.jpg'
  },
  {
    value: 'entlebucher mountain dog',
    label: 'Entlebucher Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Elio_v_Schaerlig_im_Juni_2007_klein.jpg/220px-Elio_v_Schaerlig_im_Juni_2007_klein.jpg'
  },
  {
    value: 'estonian hound',
    label: 'Estonian Hound',
    origin: 'Estonia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Go%C5%84czy_esto%C5%84ski_MB_01.jpg/220px-Go%C5%84czy_esto%C5%84ski_MB_01.jpg'
  },
  {
    value: 'estrela mountain dog',
    label: 'Estrela Mountain Dog',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Estrela_Mountain_Dog_6_month_old_male.jpg/220px-Estrela_Mountain_Dog_6_month_old_male.jpg'
  },
  {
    value: 'eurasier',
    label: 'Eurasier',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Eurasier_BailyWtatze.jpg/220px-Eurasier_BailyWtatze.jpg'
  },
  {
    value: 'field spaniel',
    label: 'Field Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Field_spaniel_581.jpg/220px-Field_spaniel_581.jpg'
  },
  {
    value: 'fila brasileiro',
    label: 'Fila Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fila_brasileiro_ppk9.jpg/220px-Fila_brasileiro_ppk9.jpg'
  },
  {
    value: 'finnish hound',
    label: 'Finnish Hound',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Finnish_Hound.jpg/220px-Finnish_Hound.jpg'
  },
  {
    value: 'finnish lapphund',
    label: 'Finnish Lapphund',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Finnish_Lapphund_Glenchess_Revontuli.jpg/220px-Finnish_Lapphund_Glenchess_Revontuli.jpg'
  },
  {
    value: 'finnish spitz',
    label: 'Finnish Spitz',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Finnish_Spitz_600.jpg/220px-Finnish_Spitz_600.jpg'
  },
  {
    value: 'flat-coated retriever',
    label: 'Flat-Coated Retriever',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flat_Coated_Retriever_-_black.jpg/220px-Flat_Coated_Retriever_-_black.jpg'
  },
  {
    value: 'french bulldog',
    label: 'French Bulldog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2008-07-28_Dog_at_Frolick_Field.jpg/220px-2008-07-28_Dog_at_Frolick_Field.jpg'
  },
  {
    value: 'french spaniel',
    label: 'French Spaniel',
    origin: 'France and Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/04031137_Epagneul_Francais.jpg/220px-04031137_Epagneul_Francais.jpg'
  },
  {
    value: 'galgo español',
    label: 'Galgo Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Galgo-Espanol.jpg/220px-Galgo-Espanol.jpg'
  },
  {
    value: 'garafian shepherd',
    label: 'Garafian Shepherd',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ch-Rasti.jpg/250px-Ch-Rasti.jpg'
  },
  {
    value: 'gascon saintongeois',
    label: 'Gascon Saintongeois',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Virelade_from_1915.JPG/220px-Virelade_from_1915.JPG'
  },
  {
    value: 'georgian shepherd',
    label: 'Georgian Shepherd',
    origin: 'Georgia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Georgia_Shepherd.jpg/220px-Georgia_Shepherd.jpg'
  },
  {
    value: 'german hound',
    label: 'German Hound',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/German_Hound_from_1915.JPG/220px-German_Hound_from_1915.JPG'
  },
  {
    value: 'german longhaired pointer',
    label: 'German Longhaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DeutschLanghaarneu.jpg/220px-DeutschLanghaarneu.jpg'
  },
  {
    value: 'german pinscher',
    label: 'German Pinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bvdb-duitse_pincher.jpg/220px-Bvdb-duitse_pincher.jpg'
  },
  {
    value: 'german roughhaired pointer',
    label: 'German Roughhaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/03030288_Deutsch_Stichelhaa.jpg/220px-03030288_Deutsch_Stichelhaa.jpg'
  },
  {
    value: 'german shepherd',
    label: 'German Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'german shorthaired pointer',
    label: 'German Shorthaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Duitse_staande_korthaar_10-10-2.jpg/220px-Duitse_staande_korthaar_10-10-2.jpg'
  },
  {
    value: 'german spaniel',
    label: 'German Spaniel',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Plochacz_niemiecki_2_pl.jpg/220px-Plochacz_niemiecki_2_pl.jpg'
  },
  {
    value: 'german spitz',
    label: 'German Spitz',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pomeranian_orange-sable_Coco.jpg/220px-Pomeranian_orange-sable_Coco.jpg'
  },
  {
    value: 'german wirehaired pointer',
    label: 'German Wirehaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GermanWirehrPtr1_wb.jpg/220px-GermanWirehrPtr1_wb.jpg'
  },
  {
    value: 'giant schnauzer',
    label: 'Giant Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/GiantSchnauzer.jpg/220px-GiantSchnauzer.jpg'
  },
  {
    value: 'glen of imaal terrier',
    label: 'Glen of Imaal Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Wheaten_glen_of_imaal.jpg/220px-Wheaten_glen_of_imaal.jpg'
  },
  {
    value: 'golden retriever',
    label: 'Golden Retriever',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/220px-Golden_Retriever_Dukedestiny01_drvd.jpg'
  },
  {
    value: 'gończy polski',
    label: 'Gończy Polski',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/PolishScenthound-%22NUTKA_Klusujaca_Sfora_wl_A.Balcerzak.jpg/220px-PolishScenthound-%22NUTKA_Klusujaca_Sfora_wl_A.Balcerzak.jpg'
  },
  {
    value: 'gordon setter',
    label: 'Gordon Setter',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Orrvilas_enska_w800px.jpg/220px-Orrvilas_enska_w800px.jpg'
  },
  {
    value: 'grand anglo-français blanc et noir',
    label: 'Grand Anglo-Français Blanc et Noir',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grand_anglo_francais_noir.jpg/220px-Grand_anglo_francais_noir.jpg'
  },
  {
    value: 'grand anglo-français blanc et orange',
    label: 'Grand Anglo-Français Blanc et Orange',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/06101298_Grand_anglo_francais_orange.jpg/220px-06101298_Grand_anglo_francais_orange.jpg'
  },
  {
    value: 'grand anglo-français tricolore',
    label: 'Grand Anglo-Français Tricolore',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grand_anglo_francais_tricol.jpg/220px-Grand_anglo_francais_tricol.jpg'
  },
  {
    value: 'grand basset griffon vendéen',
    label: 'Grand Basset Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/GrandBassettGriffonVend%C3%A9en.jpg/220px-GrandBassettGriffonVend%C3%A9en.jpg'
  },
  {
    value: 'grand bleu de gascogne',
    label: 'Grand Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Grand_Bleu_de_Gascogne_in_a_blue_dogcollar.jpg/220px-Grand_Bleu_de_Gascogne_in_a_blue_dogcollar.jpg'
  },
  {
    value: 'grand griffon vendéen',
    label: 'Grand Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Grand_griffon_vend%C3%A9en_aka_Large_Vend%C3%A9en_Griffon.JPG/220px-Grand_griffon_vend%C3%A9en_aka_Large_Vend%C3%A9en_Griffon.JPG'
  },
  {
    value: 'great dane',
    label: 'Great Dane',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dog_niemiecki_%C5%BC%C3%B3%C5%82ty_LM980.jpg/220px-Dog_niemiecki_%C5%BC%C3%B3%C5%82ty_LM980.jpg'
  },
  {
    value: 'greater swiss mountain dog',
    label: 'Greater Swiss Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Greater_Swiss_Mountain_Dog_2018.jpg/220px-Greater_Swiss_Mountain_Dog_2018.jpg'
  },
  {
    value: 'greek harehound',
    label: 'Greek Harehound',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hellenic_Hound_aka_Hellinikos_Ichnilatis.jpg/220px-Hellenic_Hound_aka_Hellinikos_Ichnilatis.jpg'
  },
  {
    value: 'greek shepherd',
    label: 'Greek Shepherd',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Greek_shepherd_male.jpg/220px-Greek_shepherd_male.jpg'
  },
  {
    value: 'greenland dog',
    label: 'Greenland Dog',
    origin: 'Greenland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Greenland_Dog.jpg/220px-Greenland_Dog.jpg'
  },
  {
    value: 'greyhound',
    label: 'Greyhound',
    origin: '(Widespread)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GraceTheGreyhound.jpg/220px-GraceTheGreyhound.jpg'
  },
  {
    value: 'griffon bleu de gascogne',
    label: 'Griffon Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/04031124_Griffon_Bleu_de_Gascogne.jpg/220px-04031124_Griffon_Bleu_de_Gascogne.jpg'
  },
  {
    value: 'griffon fauve de bretagne',
    label: 'Griffon Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/08115500_Griffon_Fauve_Bretagne.jpg/220px-08115500_Griffon_Fauve_Bretagne.jpg'
  },
  {
    value: 'griffon nivernais',
    label: 'Griffon Nivernais',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Griffon_nivernais.jpg/220px-Griffon_nivernais.jpg'
  },
  {
    value: 'gull dong',
    label: 'Gull Dong',
    origin: 'PakistanIndia',
    img: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Gull_Dong_in_rural_Pakistan_.jpg'
  },
  {
    value: 'gull terrier',
    label: 'Gull Terrier',
    origin: 'IndiaPakistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Gull_Terr.png/220px-Gull_Terr.png'
  },
  {
    value: 'hällefors elkhound',
    label: 'Hällefors Elkhound',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hades_Mosshult_H%C3%A4lleforsare.jpg/220px-Hades_Mosshult_H%C3%A4lleforsare.jpg'
  },
  {
    value: 'halden hound',
    label: 'Halden Hound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Haldenstovare.jpg/220px-Haldenstovare.jpg'
  },
  {
    value: 'hamiltonstövare',
    label: 'Hamiltonstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hamiltonstovare_600.jpg/220px-Hamiltonstovare_600.jpg'
  },
  {
    value: 'hanover hound',
    label: 'Hanover Hound',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hannoverscher_Schweisshund.jpg/220px-Hannoverscher_Schweisshund.jpg'
  },
  {
    value: 'harrier',
    label: 'Harrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harrier_tricolour.jpg/220px-Harrier_tricolour.jpg'
  },
  {
    value: 'havanese',
    label: 'Havanese',
    origin: 'Cuba (AKC)/Western Mediterranean Region (FCI)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_Havanese_judging.jpg/220px-A_Havanese_judging.jpg'
  },
  {
    value: 'himalayan sheepdog',
    label: 'Himalayan Sheepdog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2._Himalayan_sheep_dog.jpg/220px-2._Himalayan_sheep_dog.jpg'
  },
  {
    value: 'hierran wolfdog',
    label: 'Hierran Wolfdog',
    origin: 'El Hierro, Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kinha.jpg/220px-Kinha.jpg'
  },
  {
    value: 'hmong bobtail dog',
    label: 'Hmong bobtail dog',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hmong_Bobtail_1.jpg/220px-Hmong_Bobtail_1.jpg'
  },
  {
    value: 'hokkaido',
    label: 'Hokkaido',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hokkaidou_inu.jpg/220px-Hokkaidou_inu.jpg'
  },
  {
    value: 'hovawart',
    label: 'Hovawart',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Helos_11.jpg/220px-Helos_11.jpg'
  },
  {
    value: 'huntaway',
    label: 'Huntaway',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Huntaway.JPG/220px-Huntaway.JPG'
  },
  {
    value: 'hygen hound',
    label: 'Hygen Hound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Norwegian_Hygenhound.jpg/220px-Norwegian_Hygenhound.jpg'
  },
  {
    value: 'ibizan hound',
    label: 'Ibizan Hound',
    origin: 'Ibiza, (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Podenco_z_ibizy_645.jpg/240px-Podenco_z_ibizy_645.jpg'
  },
  {
    value: 'icelandic sheepdog',
    label: 'Icelandic Sheepdog',
    origin: 'Iceland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Icelandic_Sheepdog_Alisa_von_Lehenberg.jpg/220px-Icelandic_Sheepdog_Alisa_von_Lehenberg.jpg'
  },
  {
    value: 'indian pariah dog',
    label: 'Indian pariah dog',
    origin: 'Indian subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/The_Indian_Pariah_Dog.jpg/220px-The_Indian_Pariah_Dog.jpg'
  },
  {
    value: 'indian spitz',
    label: 'Indian Spitz',
    origin: 'India',
    img: 'Not available'
  },
  {
    value: 'irish red and white setter',
    label: 'Irish Red and White Setter',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Irish_Red_And_White_Setter_2005.jpg/220px-Irish_Red_And_White_Setter_2005.jpg'
  },
  {
    value: 'irish setter',
    label: 'Irish Setter',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Can_Setter_dog_GFDL.jpg/220px-Can_Setter_dog_GFDL.jpg'
  },
  {
    value: 'irish terrier',
    label: 'Irish Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/IrishTerrierSydenhamHillWoods.jpg/220px-IrishTerrierSydenhamHillWoods.jpg'
  },
  {
    value: 'irish water spaniel',
    label: 'Irish Water Spaniel',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Irlandzki_spaniel_wodny_676.jpg/220px-Irlandzki_spaniel_wodny_676.jpg'
  },
  {
    value: 'irish wolfhound',
    label: 'Irish Wolfhound',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%282%29_Irish_Wolfhound_4.jpg/220px-%282%29_Irish_Wolfhound_4.jpg'
  },
  {
    value: 'istrian coarse-haired hound',
    label: 'Istrian Coarse-haired Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Istrian_hound2.jpg/220px-Istrian_hound2.jpg'
  },
  {
    value: 'istrian shorthaired hound',
    label: 'Istrian Shorthaired Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istrische_Bracke.jpg/220px-Istrische_Bracke.jpg'
  },
  {
    value: 'italian greyhound',
    label: 'Italian Greyhound',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Italian_Greyhound_standing_gray_%28cropped%29.jpg/220px-Italian_Greyhound_standing_gray_%28cropped%29.jpg'
  },
  {
    value: 'jack russell terrier',
    label: 'Jack Russell Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Jack_Russell_Terrier_1.jpg/220px-Jack_Russell_Terrier_1.jpg'
  },
  {
    value: 'jagdterrier',
    label: 'Jagdterrier',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jagdterrier_bulgaria.jpg/220px-Jagdterrier_bulgaria.jpg'
  },
  {
    value: 'jämthund',
    label: 'Jämthund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Swedish_Elkhound.jpg/220px-Swedish_Elkhound.jpg'
  },
  {
    value: 'japanese chin',
    label: 'Japanese Chin',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chin_posing.jpg/220px-Chin_posing.jpg'
  },
  {
    value: 'japanese spitz',
    label: 'Japanese Spitz',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BIR_Grupp_5-_JAPANSK_SPETS%2C_Chezzay%E2%80%99s_Nice_N%E2%80%99Easy_%2823938629860%29.jpg/220px-BIR_Grupp_5-_JAPANSK_SPETS%2C_Chezzay%E2%80%99s_Nice_N%E2%80%99Easy_%2823938629860%29.jpg'
  },
  {
    value: 'japanese terrier',
    label: 'Japanese Terrier',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Japanese_Terrier_22.04.2012_2pl.jpg/220px-Japanese_Terrier_22.04.2012_2pl.jpg'
  },
  {
    value: 'jindo',
    label: 'Jindo',
    origin: 'Jindo Island, South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ARIRANG.jpg/220px-ARIRANG.jpg'
  },
  {
    value: 'jonangi',
    label: 'Jonangi',
    origin: 'South India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jonangi_Pup_Shakthi.jpg/220px-Jonangi_Pup_Shakthi.jpg'
  },
  {
    value: 'kai ken',
    label: 'Kai Ken',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kai-front.jpg/220px-Kai-front.jpg'
  },
  {
    value: 'kaikadi',
    label: 'Kaikadi',
    origin: 'India',
    img: 'Not available'
  },
  {
    value: 'kangal shepherd dog',
    label: 'Kangal Shepherd Dog',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kangal_front_on.jpg/220px-Kangal_front_on.jpg'
  },
  {
    value: 'kanni',
    label: 'Kanni',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kanni.jpg/220px-Kanni.jpg'
  },
  {
    value: 'karakachan dog',
    label: 'Karakachan dog',
    origin: 'Bulgaria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Karakatschan.jpg/220px-Karakatschan.jpg'
  },
  {
    value: 'karelian bear dog',
    label: 'Karelian Bear Dog',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Karelski_pies_na_nied%C5%BAwiedzie_sylwetka.JPG/220px-Karelski_pies_na_nied%C5%BAwiedzie_sylwetka.JPG'
  },
  {
    value: 'kars',
    label: 'Kars',
    origin: 'Turkey',
    img: 'Not available'
  },
  {
    value: 'karst shepherd',
    label: 'Karst Shepherd',
    origin: 'Slovenia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Owczarek_kraski_654.jpg/220px-Owczarek_kraski_654.jpg'
  },
  {
    value: 'keeshond',
    label: 'Keeshond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keeshond_Majic_standing_cropped.jpg/220px-Keeshond_Majic_standing_cropped.jpg'
  },
  {
    value: 'kerry beagle',
    label: 'Kerry Beagle',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kerry_Beagle_from_1915.JPG/220px-Kerry_Beagle_from_1915.JPG'
  },
  {
    value: 'kerry blue terrier',
    label: 'Kerry Blue Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Kerry_Blue_Terrier.jpg/220px-Kerry_Blue_Terrier.jpg'
  },
  {
    value: 'king charles spaniel',
    label: 'King Charles Spaniel',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/King_Charles_Spaniel_200.jpg/220px-King_Charles_Spaniel_200.jpg'
  },
  {
    value: 'king shepherd',
    label: 'King Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'kintamani',
    label: 'Kintamani',
    origin: 'Indonesia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kintamani.jpg/220px-Kintamani.jpg'
  },
  {
    value: 'kishu',
    label: 'Kishu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kishu.jpg/220px-Kishu.jpg'
  },
  {
    value: 'kokoni',
    label: 'Kokoni',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg/220px-KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg'
  },
  {
    value: 'kombai',
    label: 'Kombai',
    origin: 'Tamil Nadu India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kombai_dog.jpg/220px-Kombai_dog.jpg'
  },
  {
    value: 'komondor',
    label: 'Komondor',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Komondor_delvin.jpg/220px-Komondor_delvin.jpg'
  },
  {
    value: 'kooikerhondje',
    label: 'Kooikerhondje',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kooiker03.jpg/220px-Kooiker03.jpg'
  },
  {
    value: 'koolie',
    label: 'Koolie',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pete_may01_web.JPG/220px-Pete_may01_web.JPG'
  },
  {
    value: 'koyun dog',
    label: 'Koyun dog',
    origin: 'Turkey',
    img: 'Not available'
  },
  {
    value: 'kromfohrländer',
    label: 'Kromfohrländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kromfohrl%C3%A4nder_in_Germany.jpg/220px-Kromfohrl%C3%A4nder_in_Germany.jpg'
  },
  {
    value: 'kuchi',
    label: 'Kuchi',
    origin: 'Afghanistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Afghan_Shepherd.jpg/220px-Afghan_Shepherd.jpg'
  },
  {
    value: 'kunming dog',
    label: 'Kunming dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'kurdish mastiff',
    label: 'Kurdish Mastiff',
    origin: 'Iraq',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pshdar_Dog-Kurdish_Dog-Kurd_Mastiff.jpg/220px-Pshdar_Dog-Kurdish_Dog-Kurd_Mastiff.jpg'
  },
  {
    value: 'beagle',
    label: 'Beagle',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Beagle_600.jpg/220px-Beagle_600.jpg'
  },
  {
    value: 'kuvasz',
    label: 'Kuvasz',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kuvasz_named_Kan.jpg/220px-Kuvasz_named_Kan.jpg'
  },
  {
    value: 'lagotto romagnolo',
    label: 'Lagotto Romagnolo',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lagotto_Romagnolo.jpg/220px-Lagotto_Romagnolo.jpg'
  },
  {
    value: 'lakeland terrier',
    label: 'Lakeland Terrier',
    origin: 'United Kingdom (England)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lakeland_Terrier.jpg/220px-Lakeland_Terrier.jpg'
  },
  {
    value: 'lancashire heeler',
    label: 'Lancashire Heeler',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lancashire_Heeler_600.jpg/220px-Lancashire_Heeler_600.jpg'
  },
  {
    value: 'landseer',
    label: 'Landseer',
    origin: 'Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Landseer.jpg/220px-Landseer.jpg'
  },
  {
    value: 'affenpinscher',
    label: 'Affenpinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Affenpinscher.jpg/220px-Affenpinscher.jpg'
  },
  {
    value: 'large münsterländer',
    label: 'Large Münsterländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/GrosserMuensterlaender.jpg/220px-GrosserMuensterlaender.jpg'
  },
  {
    value: 'leonberger',
    label: 'Leonberger',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Leonberger_male.jpg/220px-Leonberger_male.jpg'
  },
  {
    value: 'levriero sardo',
    label: 'Levriero Sardo',
    origin: 'Italy',
    img: 'Not available'
  },
  {
    value: 'lhasa apso',
    label: 'Lhasa Apso',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aishia.jpg/220px-Aishia.jpg'
  },
  {
    value: 'liangshan dog',
    label: 'Liangshan Dog',
    origin: 'China',
    img: 'Not available'
  },
  {
    value: 'lapponian herder',
    label: 'Lapponian Herder',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lapskvallhund.jpg/220px-Lapskvallhund.jpg'
  },
  {
    value: 'labrador retriever',
    label: 'Labrador Retriever',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/220px-Labrador_on_Quantock_%282175262184%29.jpg'
  },
  {
    value: 'english cocker spaniel',
    label: 'English Cocker Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/%22Bill%22_-_Cocker_spaniel_anglais_2.JPG/220px-%22Bill%22_-_Cocker_spaniel_anglais_2.JPG'
  },
  {
    value: 'lithuanian hound',
    label: 'Lithuanian Hound',
    origin: 'Lithuania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sculptures_in_Tel%C5%A1iai.jpg/220px-Sculptures_in_Tel%C5%A1iai.jpg'
  },
  {
    value: 'lobito herreño',
    label: 'Lobito Herreño',
    origin: 'El Hierro, Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kinha.jpg/220px-Kinha.jpg'
  },
  {
    value: 'löwchen',
    label: 'Löwchen',
    origin: 'Europe, possibly France in particular',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Adult_Lowchen_Gaiting.jpg/220px-Adult_Lowchen_Gaiting.jpg'
  },
  {
    value: 'magyar agár',
    label: 'Magyar agár',
    origin: 'Hungary;Transylvania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Magyar_ag%C3%A1r_male.jpg/220px-Magyar_ag%C3%A1r_male.jpg'
  },
  {
    value: 'mahratta greyhound',
    label: 'Mahratta Greyhound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mahratta_Hound.jpg/220px-Mahratta_Hound.jpg'
  },
  {
    value: 'lupo italiano',
    label: 'Lupo Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/LUPO_ITALIANO_-_PALIO_DI_CENEDA_2018_12.png/220px-LUPO_ITALIANO_-_PALIO_DI_CENEDA_2018_12.png'
  },
  {
    value: 'mackenzie river husky',
    label: 'Mackenzie River husky',
    origin: 'Canada, United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/MackenzieRiverHusky.jpg/220px-MackenzieRiverHusky.jpg'
  },
  {
    value: 'maltese',
    label: 'Maltese',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Maltese_600.jpg/220px-Maltese_600.jpg'
  },
  {
    value: 'maneto',
    label: 'Maneto',
    origin: 'Andalusia (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maneto1.jpg/220px-Maneto1.jpg'
  },
  {
    value: 'manchester terrier',
    label: 'Manchester Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mancherster_Terrier.jpg/220px-Mancherster_Terrier.jpg'
  },
  {
    value: 'maremmano-abruzzese sheepdog',
    label: 'Maremmano-Abruzzese Sheepdog',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cane_Pastore_Abruzzese_Abruzzo.jpg/220px-Cane_Pastore_Abruzzese_Abruzzo.jpg'
  },
  {
    value: 'mcnab dog',
    label: 'McNab dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/McNab-Shepherd-dodger.jpg/220px-McNab-Shepherd-dodger.jpg'
  },
  {
    value: 'miniature american shepherd',
    label: 'Miniature American Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Merle_Miniature_American_Shepherd_in_Grass.jpg/220px-Blue_Merle_Miniature_American_Shepherd_in_Grass.jpg'
  },
  {
    value: 'miniature bull terrier',
    label: 'Miniature Bull Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bull_terier_i_bull_terier_miniatura_d46.jpg/220px-Bull_terier_i_bull_terier_miniatura_d46.jpg'
  },
  {
    value: 'miniature fox terrier',
    label: 'Miniature Fox Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Miniature_Fox_Terrier.jpg/220px-Miniature_Fox_Terrier.jpg'
  },
  {
    value: 'miniature pinscher',
    label: 'Miniature Pinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Miniature_pinscher.jpg/220px-Miniature_pinscher.jpg'
  },
  {
    value: 'miniature schnauzer',
    label: 'Miniature Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%D0%A6%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80_%D0%BE%D0%BA%D1%80%D0%B0%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81_%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%BC.JPG/275px-%D0%A6%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80_%D0%BE%D0%BA%D1%80%D0%B0%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81_%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%BC.JPG'
  },
  {
    value: 'molossus of epirus',
    label: 'Molossus of Epirus',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Greek_shepherd_male.jpg/220px-Greek_shepherd_male.jpg'
  },
  {
    value: 'mongrel dog',
    label: 'Mongrel dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'montenegrin mountain hound',
    label: 'Montenegrin Mountain Hound',
    origin: 'Montenegro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Montenegrinhound2.jpg/220px-Montenegrinhound2.jpg'
  },
  {
    value: 'mountain cur',
    label: 'Mountain Cur',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mtncur.png/220px-Mtncur.png'
  },
  {
    value: 'mountain feist',
    label: 'Mountain Feist',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0809bigun.jpg/220px-0809bigun.jpg'
  },
  {
    value: 'mudhol hound',
    label: 'Mudhol Hound',
    origin: 'Mudhol, Karnataka, India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caravan_hound_Closeupfire.jpg/220px-Caravan_hound_Closeupfire.jpg'
  },
  {
    value: 'mudi',
    label: 'Mudi',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hondenras_Mudi.jpg/220px-Hondenras_Mudi.jpg'
  },
  {
    value: 'neapolitan mastiff',
    label: 'Neapolitan Mastiff',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mastino_sylwetka.jpg/220px-Mastino_sylwetka.jpg'
  },
  {
    value: 'nenets herding laika',
    label: 'Nenets Herding Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B0%D0%B9%D0%BA%D0%B0_7.jpg/220px-%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B0%D0%B9%D0%BA%D0%B0_7.jpg'
  },
  {
    value: 'new guinea singing dog',
    label: 'New Guinea singing dog',
    origin: 'New Guinea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/New_Guinea_Singing_Dog_on_trail-Cropped.jpg/220px-New_Guinea_Singing_Dog_on_trail-Cropped.jpg'
  },
  {
    value: 'new zealand heading dog',
    label: 'New Zealand Heading Dog',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Young_New_Zealand_Heading_dog.jpg/220px-Young_New_Zealand_Heading_dog.jpg'
  },
  {
    value: 'newfoundland',
    label: 'Newfoundland',
    origin: 'Island of Newfoundland, modern-day Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Newfoundland_dog_Smoky.jpg/220px-Newfoundland_dog_Smoky.jpg'
  },
  {
    value: 'norfolk terrier',
    label: 'Norfolk Terrier',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Norfolk_terrier_CAC.jpg/220px-Norfolk_terrier_CAC.jpg'
  },
  {
    value: 'norrbottenspets',
    label: 'Norrbottenspets',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nordic_Spitz.jpg/220px-Nordic_Spitz.jpg'
  },
  {
    value: 'northern inuit dog',
    label: 'Northern Inuit Dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Northern_Inuit_Dog.jpg/240px-Northern_Inuit_Dog.jpg'
  },
  {
    value: 'norwegian buhund',
    label: 'Norwegian Buhund',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Norwegian_Buhund_600.jpg/220px-Norwegian_Buhund_600.jpg'
  },
  {
    value: 'norwegian elkhound',
    label: 'Norwegian Elkhound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Norwegian_Elkhound.jpg/220px-Norwegian_Elkhound.jpg'
  },
  {
    value: 'norwegian lundehund',
    label: 'Norwegian Lundehund',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lundehund-2003.jpg/220px-Lundehund-2003.jpg'
  },
  {
    value: 'norwich terrier',
    label: 'Norwich Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Norwichterrier.jpg/220px-Norwichterrier.jpg'
  },
  {
    value: 'nova scotia duck tolling retriever',
    label: 'Nova Scotia Duck Tolling Retriever',
    origin: 'Canada (Nova Scotia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Duck_Toller.jpg/220px-Duck_Toller.jpg'
  },
  {
    value: 'old english sheepdog',
    label: 'Old English Sheepdog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Old_English_Sheepdog_%28side%29.jpg/220px-Old_English_Sheepdog_%28side%29.jpg'
  },
  {
    value: 'old danish pointer',
    label: 'Old Danish Pointer',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg/220px-Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg'
  },
  {
    value: 'olde english bulldogge',
    label: 'Olde English Bulldogge',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/UKC_Olde_English_Bulldogge_Male.jpg/220px-UKC_Olde_English_Bulldogge_Male.jpg'
  },
  {
    value: 'otterhound',
    label: 'Otterhound',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Two_otterhounds.jpg/220px-Two_otterhounds.jpg'
  },
  {
    value: 'old english terrier',
    label: 'Old English Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Old_English_Black_and_Tan_Terrier.jpg/220px-Old_English_Black_and_Tan_Terrier.jpg'
  },
  {
    value: 'pachon navarro',
    label: 'Pachon Navarro',
    origin: 'Navarre, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pachon_navarro.jpeg/220px-Pachon_navarro.jpeg'
  },
  {
    value: 'pampas deerhound',
    label: 'Pampas Deerhound',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Veadeiro_pampeano.JPG/220px-Veadeiro_pampeano.JPG'
  },
  {
    value: 'papillon',
    label: 'Papillon',
    origin: 'Belgium / France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RileyPapillon.JPG/220px-RileyPapillon.JPG'
  },
  {
    value: 'parson russell terrier',
    label: 'Parson Russell Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/05052881_PRT_braun_rau.jpg/220px-05052881_PRT_braun_rau.jpg'
  },
  {
    value: 'pastore della lessinia e del lagorai',
    label: 'Pastore della Lessinia e del Lagorai',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pastore_della_Lessinia_e_del_Lagorai.jpg/220px-Pastore_della_Lessinia_e_del_Lagorai.jpg'
  },
  {
    value: 'patagonian sheepdog',
    label: 'Patagonian Sheepdog',
    origin: 'Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ovejero_magall%C3%A1nico_2.jpg/220px-Ovejero_magall%C3%A1nico_2.jpg'
  },
  {
    value: 'patterdale terrier',
    label: 'Patterdale Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/05078045_Patterdale_Terrier.jpg/220px-05078045_Patterdale_Terrier.jpg'
  },
  {
    value: 'pekingese',
    label: 'Pekingese',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/1AKC_Pekingese_Dog_Show_2011.jpg/220px-1AKC_Pekingese_Dog_Show_2011.jpg'
  },
  {
    value: 'pembroke welsh corgi',
    label: 'Pembroke Welsh Corgi',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/220px-Welchcorgipembroke.JPG'
  },
  {
    value: 'perro majorero',
    label: 'Perro Majorero',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bardina-Donna-1.jpg/220px-Bardina-Donna-1.jpg'
  },
  {
    value: 'perro de pastor mallorquin',
    label: 'Perro de Pastor Mallorquin',
    origin: 'Majorca (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ca_de_Bestiar.JPG/220px-Ca_de_Bestiar.JPG'
  },
  {
    value: 'perro de presa canario',
    label: 'Perro de Presa Canario',
    origin: 'Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Presacanariobody.jpg/220px-Presacanariobody.jpg'
  },
  {
    value: 'perro de presa mallorquin',
    label: 'Perro de Presa Mallorquin',
    origin: 'Spain (Majorca)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ZarcoBruno2015.jpg/220px-ZarcoBruno2015.jpg'
  },
  {
    value: 'peruvian inca orchid',
    label: 'Peruvian Inca Orchid',
    origin: 'Peru',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/PHDStandardStanding_-_Perro_Sin_Pelo_del_Per%C3%BA.jpg/220px-PHDStandardStanding_-_Perro_Sin_Pelo_del_Per%C3%BA.jpg'
  },
  {
    value: 'petit basset griffon vendéen',
    label: 'Petit Basset Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P_Basset_Griffon_Vendeen_600.jpg/220px-P_Basset_Griffon_Vendeen_600.jpg'
  },
  {
    value: 'petit bleu de gascogne',
    label: 'Petit Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ma%C5%82y_go%C5%84czy_gasko%C5%84ski_Cita_z_Beckova_Cb5.jpg/220px-Ma%C5%82y_go%C5%84czy_gasko%C5%84ski_Cita_z_Beckova_Cb5.jpg'
  },
  {
    value: 'phalène',
    label: 'Phalène',
    origin: 'Belgium, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Spaniel_miniaturowy_kontynentalny_phalene_00.jpg/220px-Spaniel_miniaturowy_kontynentalny_phalene_00.jpg'
  },
  {
    value: 'pharaoh hound',
    label: 'Pharaoh Hound',
    origin: 'Malta',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pies_faraona_e34.jpg/220px-Pies_faraona_e34.jpg'
  },
  {
    value: 'phu quoc ridgeback',
    label: 'Phu Quoc Ridgeback',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Phu_Quoc_dog.jpg/220px-Phu_Quoc_dog.jpg'
  },
  {
    value: 'picardy spaniel',
    label: 'Picardy Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Epagneul_picard_685.jpg/220px-Epagneul_picard_685.jpg'
  },
  {
    value: 'plummer terrier',
    label: 'Plummer Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Plummer_Terrier_Nathy.jpg/220px-Plummer_Terrier_Nathy.jpg'
  },
  {
    value: 'plott hound',
    label: 'Plott Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Plotthund_Kynnagardens_Ziggy_Lundamo.JPG/220px-Plotthund_Kynnagardens_Ziggy_Lundamo.JPG'
  },
  {
    value: 'podenco andaluz',
    label: 'Podenco Andaluz',
    origin: 'Andalusia, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Podenco_chico_resized.jpg/220px-Podenco_chico_resized.jpg'
  },
  {
    value: 'podenco canario',
    label: 'Podenco Canario',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Podenco_canario_hembra.jpg/260px-Podenco_canario_hembra.jpg'
  },
  {
    value: 'podenco valenciano',
    label: 'Podenco Valenciano',
    origin: 'Valencian Community, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Podencovalencianolisofawn1.jpg/220px-Podencovalencianolisofawn1.jpg'
  },
  {
    value: 'pointer',
    label: 'Pointer',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/English_Pointer_orange-white.jpg/220px-English_Pointer_orange-white.jpg'
  },
  {
    value: 'poitevin',
    label: 'Poitevin',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Poitevin_Hound.jpg/220px-Poitevin_Hound.jpg'
  },
  {
    value: 'polish greyhound',
    label: 'Polish Greyhound',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chart_polski_200_LM.jpg/220px-Chart_polski_200_LM.jpg'
  },
  {
    value: 'polish hound',
    label: 'Polish Hound',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/PolishHound-MlChPl-OKSANA-ZOstregoBoru-wl.JoannaZembrzuska_3.JPG/220px-PolishHound-MlChPl-OKSANA-ZOstregoBoru-wl.JoannaZembrzuska_3.JPG'
  },
  {
    value: 'polish lowland sheepdog',
    label: 'Polish Lowland Sheepdog',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Polski_owczarek_nizinny_rybnik-kamien_pl.jpg/220px-Polski_owczarek_nizinny_rybnik-kamien_pl.jpg'
  },
  {
    value: 'polish tatra sheepdog',
    label: 'Polish Tatra Sheepdog',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Podhalaner_Sven_Fischer.jpg/220px-Podhalaner_Sven_Fischer.jpg'
  },
  {
    value: 'pomeranian',
    label: 'Pomeranian',
    origin: 'Pomerania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/220px-Pomeranian.JPG'
  },
  {
    value: 'pont-audemer spaniel',
    label: 'Pont-Audemer Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/04031158_Epagneul_Pont_Audemer.jpg/220px-04031158_Epagneul_Pont_Audemer.jpg'
  },
  {
    value: 'poodle',
    label: 'Poodle',
    origin: 'Germany or France (see history)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/220px-Full_attention_%288067543690%29.jpg'
  },
  {
    value: 'porcelaine',
    label: 'Porcelaine',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Porcelaine_2009_pl4.jpg/220px-Porcelaine_2009_pl4.jpg'
  },
  {
    value: 'portuguese podengo',
    label: 'Portuguese Podengo',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Evitarocks.jpg/220px-Evitarocks.jpg'
  },
  {
    value: 'portuguese pointer',
    label: 'Portuguese Pointer',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portuguese_pointer_11yo.jpg/220px-Portuguese_pointer_11yo.jpg'
  },
  {
    value: 'portuguese water dog',
    label: 'Portuguese Water Dog',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/C%C3%A3o_de_agua_Portugu%C3%AAs_2.jpg/220px-C%C3%A3o_de_agua_Portugu%C3%AAs_2.jpg'
  },
  {
    value: 'posavac hound',
    label: 'Posavac Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Posavac_hound_female_%28cropped%29.jpg/220px-Posavac_hound_female_%28cropped%29.jpg'
  },
  {
    value: 'pražský krysařík',
    label: 'Pražský Krysařík',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Prague_Ratter.jpg/220px-Prague_Ratter.jpg'
  },
  {
    value: 'pudelpointer',
    label: 'Pudelpointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pudelpointer_on_point.jpg/220px-Pudelpointer_on_point.jpg'
  },
  {
    value: 'pug',
    label: 'Pug',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/220px-Mops_oct09_cropped2.jpg'
  },
  {
    value: 'puli',
    label: 'Puli',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PuliBlack_wb.jpg/220px-PuliBlack_wb.jpg'
  },
  {
    value: 'pumi',
    label: 'Pumi',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pumi_2.jpg/220px-Pumi_2.jpg'
  },
  {
    value: 'pungsan dog',
    label: 'Pungsan dog',
    origin: 'former Phungsan county, Ryanggang-do, North Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Poongsandogs.JPG/220px-Poongsandogs.JPG'
  },
  {
    value: 'pyrenean mastiff',
    label: 'Pyrenean Mastiff',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MasPiri-Lula-ESP.jpg/220px-MasPiri-Lula-ESP.jpg'
  },
  {
    value: 'pyrenean mountain dog',
    label: 'Pyrenean Mountain Dog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Great_Pyrenees_Mountain_Dog_2.png/220px-Great_Pyrenees_Mountain_Dog_2.png'
  },
  {
    value: 'pyrenean sheepdog',
    label: 'Pyrenean Sheepdog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Berger-des-Pyrenees_Adeux_0302x0214.jpg/220px-Berger-des-Pyrenees_Adeux_0302x0214.jpg'
  },
  {
    value: 'rafeiro do alentejo',
    label: 'Rafeiro do Alentejo',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rafeiro_male.jpg/220px-Rafeiro_male.jpg'
  },
  {
    value: 'rajapalayam',
    label: 'Rajapalayam',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%282%29_Isha_female_rajapalayam.jpg/220px-%282%29_Isha_female_rajapalayam.jpg'
  },
  {
    value: 'rampur greyhound',
    label: 'Rampur Greyhound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rampurgreyhound.jpg/220px-Rampurgreyhound.jpg'
  },
  {
    value: 'rat terrier',
    label: 'Rat Terrier',
    origin: 'United States of America (USA)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/AmRatTerr2_wb.jpg/220px-AmRatTerr2_wb.jpg'
  },
  {
    value: 'ratonero bodeguero andaluz',
    label: 'Ratonero Bodeguero Andaluz',
    origin: 'Andalusia (Spain) Lifespan:8-18 years',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bodeguero_young.jpg/220px-Bodeguero_young.jpg'
  },
  {
    value: 'ratonero murciano',
    label: 'Ratonero Murciano',
    origin: 'Region of Murcia, Spain',
    img: 'Not available'
  },
  {
    value: 'ratonero valenciano',
    label: 'Ratonero Valenciano',
    origin: 'Valencian Community (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ratonero_valenciano_hell.jpg/250px-Ratonero_valenciano_hell.jpg'
  },
  {
    value: 'ratonero mallorquin',
    label: 'Ratonero Mallorquin',
    origin: 'Mallorca (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ca_rater_mallorqu%C3%AD.JPG/220px-Ca_rater_mallorqu%C3%AD.JPG'
  },
  {
    value: 'rhodesian ridgeback',
    label: 'Rhodesian Ridgeback',
    origin: 'Rhodesia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rhodesian_ridgeback.jpg/220px-Rhodesian_ridgeback.jpg'
  },
  {
    value: 'redbone coonhound',
    label: 'Redbone Coonhound',
    origin: 'Southern United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Redbone-coonhound-detail.jpg/220px-Redbone-coonhound-detail.jpg'
  },
  {
    value: 'romanian mioritic shepherd dog',
    label: 'Romanian Mioritic Shepherd Dog',
    origin: 'Romania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mioritic.jpg/220px-Mioritic.jpg'
  },
  {
    value: 'romanian raven shepherd dog',
    label: 'Romanian Raven Shepherd Dog',
    origin: 'Romania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Romanian-Shepherd-Corb.jpg/220px-Romanian-Shepherd-Corb.jpg'
  },
  {
    value: 'rottweiler',
    label: 'Rottweiler',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rottweiler_standing_facing_left.jpg/220px-Rottweiler_standing_facing_left.jpg'
  },
  {
    value: 'rough collie',
    label: 'Rough Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Rough-Collie-japan08_%28cropped%29.jpg/220px-Rough-Collie-japan08_%28cropped%29.jpg'
  },
  {
    value: 'russian spaniel',
    label: 'Russian Spaniel',
    origin: 'Union of Soviet Socialist Republics',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rosyjski_spaniel_my%C5%9Bliwski_MB_01.jpg/220px-Rosyjski_spaniel_my%C5%9Bliwski_MB_01.jpg'
  },
  {
    value: 'russian toy',
    label: 'Russian Toy',
    origin: 'Russia http://www.fci.be/Nomenclature/Standards/352g09-en.pdf',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/RusskiyToyWelpe9Mon.JPG/220px-RusskiyToyWelpe9Mon.JPG'
  },
  {
    value: 'russo-european laika',
    label: 'Russo-European Laika',
    origin: 'European part of Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Russo_European_Laika_2.jpg/220px-Russo_European_Laika_2.jpg'
  },
  {
    value: 'ryukyu inu',
    label: 'Ryukyu Inu',
    origin: 'Okinawa, Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ryukyu_dog_pair.jpg/220px-Ryukyu_dog_pair.jpg'
  },
  {
    value: 'saarloos wolfdog',
    label: 'Saarloos Wolfdog',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oishani_Othari_van_Koekie%27s_Ranch.jpg/220px-Oishani_Othari_van_Koekie%27s_Ranch.jpg'
  },
  {
    value: 'sabueso español',
    label: 'Sabueso Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Angoi_de_A_Fonsagrada.JPG/220px-Angoi_de_A_Fonsagrada.JPG'
  },
  {
    value: 'saint bernard',
    label: 'Saint Bernard',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hummel_Vedor_vd_Robandahoeve.jpg/220px-Hummel_Vedor_vd_Robandahoeve.jpg'
  },
  {
    value: 'saint hubert jura hound',
    label: 'Saint Hubert Jura Hound',
    origin: 'Switzerland',
    img: 'Not available'
  },
  {
    value: 'saint miguel cattle dog',
    label: 'Saint Miguel Cattle Dog',
    origin: 'São Miguel Island, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg/220px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg'
  },
  {
    value: 'saluki',
    label: 'Saluki',
    origin: 'Fertile Crescent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Red_Smooth_Saluki.jpg/220px-Red_Smooth_Saluki.jpg'
  },
  {
    value: 'samoyed',
    label: 'Samoyed',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Samojed00.jpg/220px-Samojed00.jpg'
  },
  {
    value: 'afghan hound',
    label: 'Afghan Hound',
    origin: 'Afghanistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Afghan_dog_-_cropped.jpg/220px-Afghan_dog_-_cropped.jpg'
  },
  {
    value: 'sapsali',
    label: 'Sapsali',
    origin: 'South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korea-Jeonju-Sapsal_dog_in_front_of_a_Hanok_Village-01.jpg/220px-Korea-Jeonju-Sapsal_dog_in_front_of_a_Hanok_Village-01.jpg'
  },
  {
    value: 'sarabi dog',
    label: 'Sarabi dog',
    origin: 'Iran',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sarabi-dog.jpg/220px-Sarabi-dog.jpg'
  },
  {
    value: 'sardinian shepherd dog',
    label: 'Sardinian Shepherd Dog',
    origin: 'Sardinia (Italy)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sardinian_Shepherd_Dog.jpg/220px-Sardinian_Shepherd_Dog.jpg'
  },
  {
    value: 'šarplaninac',
    label: 'Šarplaninac',
    origin: 'former YugoslaviaNorth MacedoniaSerbia (Kosovo)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sardog.jpg/220px-Sardog.jpg'
  },
  {
    value: 'schapendoes',
    label: 'Schapendoes',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nederlandse-schapendoes-02.jpg/220px-Nederlandse-schapendoes-02.jpg'
  },
  {
    value: 'schillerstövare',
    label: 'Schillerstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Schillerst%C3%B6vare_bearbeitet.jpg/220px-Schillerst%C3%B6vare_bearbeitet.jpg'
  },
  {
    value: 'schipperke',
    label: 'Schipperke',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schipperke0001.jpg/220px-Schipperke0001.jpg'
  },
  {
    value: 'schweizer laufhund',
    label: 'Schweizer Laufhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_Hound.jpg/220px-Swiss_Hound.jpg'
  },
  {
    value: 'schweizerischer niederlaufhund',
    label: 'Schweizerischer Niederlaufhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/08115491_Schwyzer_Niederlaufhund.jpg/220px-08115491_Schwyzer_Niederlaufhund.jpg'
  },
  {
    value: 'scottish deerhound',
    label: 'Scottish Deerhound',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Deerhound_Fernhill%27s_Kendra.jpg/220px-Deerhound_Fernhill%27s_Kendra.jpg'
  },
  {
    value: 'scottish terrier',
    label: 'Scottish Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Scottish_Terrier_Photo_of_Face.jpg/220px-Scottish_Terrier_Photo_of_Face.jpg'
  },
  {
    value: 'sealyham terrier',
    label: 'Sealyham Terrier',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Charmin_crufts_2009.jpg/220px-Charmin_crufts_2009.jpg'
  },
  {
    value: "segugio dell'appennino",
    label: "Segugio dell'Appennino",
    origin: 'Italy',
    img: 'Not available'
  },
  {
    value: 'segugio italiano',
    label: 'Segugio Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Segugioitalianopelorasofulvo_%28cropped%29.JPG/220px-Segugioitalianopelorasofulvo_%28cropped%29.JPG'
  },
  {
    value: 'segugio maremmano',
    label: 'Segugio Maremmano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Maremmahound-brindle1.jpg/220px-Maremmahound-brindle1.jpg'
  },
  {
    value: 'serbian hound',
    label: 'Serbian Hound',
    origin: 'Serbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Serbian_Hound.JPG/220px-Serbian_Hound.JPG'
  },
  {
    value: 'serbian tricolour hound',
    label: 'Serbian Tricolour Hound',
    origin: 'Serbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Srpski_Trobojni_Gonic.gif/220px-Srpski_Trobojni_Gonic.gif'
  },
  {
    value: 'serrano bulldog',
    label: 'Serrano Bulldog',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Anuke.jpg/220px-Anuke.jpg'
  },
  {
    value: 'shar pei',
    label: 'Shar Pei',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dragongate_Mong_Jai.jpg/220px-Dragongate_Mong_Jai.jpg'
  },
  {
    value: 'shetland sheepdog',
    label: 'Shetland Sheepdog',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shetland_Sheepdog_600.jpg/220px-Shetland_Sheepdog_600.jpg'
  },
  {
    value: 'shiba inu',
    label: 'Shiba Inu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shiba_Inu_%28Chinese_characters%29.svg/70px-Shiba_Inu_%28Chinese_characters%29.svg.png'
  },
  {
    value: 'shih tzu',
    label: 'Shih Tzu',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/220px-Shihtzu_%28cropped%29.jpg'
  },
  {
    value: 'shikoku',
    label: 'Shikoku',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Shikokuken.jpg/220px-Shikokuken.jpg'
  },
  {
    value: 'shiloh shepherd',
    label: 'Shiloh Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'siberian husky',
    label: 'Siberian Husky',
    origin: 'Siberia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Husky_L.jpg/220px-Husky_L.jpg'
  },
  {
    value: 'silken windhound',
    label: 'Silken Windhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fallon_the_Silken_Windhound.jpg/220px-Fallon_the_Silken_Windhound.jpg'
  },
  {
    value: 'silky terrier',
    label: 'Silky Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg/220px-Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg'
  },
  {
    value: 'sinhala hound',
    label: 'Sinhala Hound',
    origin: 'Sri Lanka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tomy1.jpg/220px-Tomy1.jpg'
  },
  {
    value: 'skye terrier',
    label: 'Skye Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Skye_terrier_800.jpg/220px-Skye_terrier_800.jpg'
  },
  {
    value: 'sloughi',
    label: 'Sloughi',
    origin: 'North Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sloughi_male.jpg/220px-Sloughi_male.jpg'
  },
  {
    value: 'slovakian wirehaired pointer',
    label: 'Slovakian Wirehaired Pointer',
    origin: 'Slovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/ICh_Brita_z_Ruzenice.jpg/220px-ICh_Brita_z_Ruzenice.jpg'
  },
  {
    value: 'slovenský cuvac',
    label: 'Slovenský Cuvac',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cuvac_1.jpg/220px-Cuvac_1.jpg'
  },
  {
    value: 'slovenský kopov',
    label: 'Slovenský Kopov',
    origin: 'Slovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Go%C5%84czy_s%C5%82owacki_pl.jpg/220px-Go%C5%84czy_s%C5%82owacki_pl.jpg'
  },
  {
    value: 'smalandstövare',
    label: 'Smalandstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Smaland-St%C3%B6vare.jpg/220px-Smaland-St%C3%B6vare.jpg'
  },
  {
    value: 'small greek domestic dog',
    label: 'Small Greek domestic dog',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg/220px-KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg'
  },
  {
    value: 'small münsterländer',
    label: 'Small Münsterländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kleiner_M%C3%BCnsterl%C3%A4nder.jpg/220px-Kleiner_M%C3%BCnsterl%C3%A4nder.jpg'
  },
  {
    value: 'smithfield',
    label: 'Smithfield',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'smooth collie',
    label: 'Smooth Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/SmoothCollie_TriColour.jpg/220px-SmoothCollie_TriColour.jpg'
  },
  {
    value: 'smooth fox terrier',
    label: 'Smooth Fox Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Patrick_the_Smooth_Fox_Terrier.jpg/220px-Patrick_the_Smooth_Fox_Terrier.jpg'
  },
  {
    value: 'soft-coated wheaten terrier',
    label: 'Soft-Coated Wheaten Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Australian_Grand_Champion_Dancestar_Zero_O_Seven_%22Bondy%22.jpg/220px-Australian_Grand_Champion_Dancestar_Zero_O_Seven_%22Bondy%22.jpg'
  },
  {
    value: 'south russian ovcharka',
    label: 'South Russian Ovcharka',
    origin: 'Russian EmpireSoviet UnionUkraineRussia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/South_Russian_Ovcharka.jpg/220px-South_Russian_Ovcharka.jpg'
  },
  {
    value: 'spanish mastiff',
    label: 'Spanish Mastiff',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spanish_Mastiff.JPG/220px-Spanish_Mastiff.JPG'
  },
  {
    value: 'spanish water dog',
    label: 'Spanish Water Dog',
    origin: 'Andalusia (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Perro_agua.jpg/220px-Perro_agua.jpg'
  },
  {
    value: 'spino degli iblei',
    label: 'Spino degli Iblei',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'spinone italiano',
    label: 'Spinone Italiano',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/05042363_Spinone_braun.jpg/220px-05042363_Spinone_braun.jpg'
  },
  {
    value: 'sporting lucas terrier',
    label: 'Sporting Lucas Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/LucasTerrier.jpg/220px-LucasTerrier.jpg'
  },
  {
    value: 'stabyhoun',
    label: 'Stabyhoun',
    origin: 'The Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Frisianstaby.jpg/220px-Frisianstaby.jpg'
  },
  {
    value: 'staffordshire bull terrier',
    label: 'Staffordshire Bull Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D7%A1%D7%90%D7%98%D7%A3_%D7%90%D7%A0%D7%92%D7%9C%D7%99.jpg/220px-%D7%A1%D7%90%D7%98%D7%A3_%D7%90%D7%A0%D7%92%D7%9C%D7%99.jpg'
  },
  {
    value: 'standard schnauzer',
    label: 'Standard Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Standard_Grey_Schnauzer_%28cropped%29.JPG/220px-Standard_Grey_Schnauzer_%28cropped%29.JPG'
  },
  {
    value: 'stephens stock',
    label: 'Stephens Stock',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Stephens_Cur.jpg/220px-Stephens_Cur.jpg'
  },
  {
    value: 'styrian coarse-haired hound',
    label: 'Styrian Coarse-haired Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Steirische_Rauhhaarbracke.jpg/220px-Steirische_Rauhhaarbracke.jpg'
  },
  {
    value: 'sussex spaniel',
    label: 'Sussex Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sussex_spaniel_t43.jpg/220px-Sussex_spaniel_t43.jpg'
  },
  {
    value: 'swedish lapphund',
    label: 'Swedish Lapphund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Svensk_lapphund.JPG/220px-Svensk_lapphund.JPG'
  },
  {
    value: 'swedish vallhund',
    label: 'Swedish Vallhund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/V%C3%A4stg%C3%B6taspets_hane_5_%C3%A5r.jpg/220px-V%C3%A4stg%C3%B6taspets_hane_5_%C3%A5r.jpg'
  },
  {
    value: 'swinford bandog',
    label: 'Swinford Bandog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'taigan',
    label: 'Taigan',
    origin: 'Kyrgyzstan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Taigan.jpg/220px-Taigan.jpg'
  },
  {
    value: 'taiwan dog',
    label: 'Taiwan Dog',
    origin: 'Taiwan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Formosan_nina.jpg/220px-Formosan_nina.jpg'
  },
  {
    value: 'tamaskan dog',
    label: 'Tamaskan Dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Northern_Inuit_Dog.jpg/240px-Northern_Inuit_Dog.jpg'
  },
  {
    value: 'tang dog',
    label: 'Tang Dog',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/HK_SW_QR_West_pet_Dog_walking_May_2021_SS2_05.jpg/220px-HK_SW_QR_West_pet_Dog_walking_May_2021_SS2_05.jpg'
  },
  {
    value: 'tazy',
    label: 'Tazy',
    origin: 'Kazakhstan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chart_%C5%9Brodkowoazjatycki_Zeila.jpg/220px-Chart_%C5%9Brodkowoazjatycki_Zeila.jpg'
  },
  {
    value: 'teddy roosevelt terrier',
    label: 'Teddy Roosevelt Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Teddyterrier.jpg/220px-Teddyterrier.jpg'
  },
  {
    value: 'telomian',
    label: 'Telomian',
    origin: 'Malaysia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Telomian.jpg/220px-Telomian.jpg'
  },
  {
    value: 'tenterfield terrier',
    label: 'Tenterfield Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tenterfield_Terrier_01.jpg/220px-Tenterfield_Terrier_01.jpg'
  },
  {
    value: 'terrier brasileiro',
    label: 'Terrier Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Terrier_brazylijski_2.jpg/220px-Terrier_brazylijski_2.jpg'
  },
  {
    value: 'thai bangkaew dog',
    label: 'Thai Bangkaew Dog',
    origin: 'Bang Rakam, Phitsanulok, Thailand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg/220px-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg'
  },
  {
    value: 'thai ridgeback',
    label: 'Thai Ridgeback',
    origin: 'Thailand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Thai-Ridgeback.jpg/220px-Thai-Ridgeback.jpg'
  },
  {
    value: 'tibetan kyi apso',
    label: 'Tibetan Kyi Apso',
    origin: 'Tibet',
    img: 'Not available'
  },
  {
    value: 'tibetan mastiff',
    label: 'Tibetan Mastiff',
    origin: 'Tibetan Plateau',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg/220px-BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg'
  },
  {
    value: 'tibetan spaniel',
    label: 'Tibetan Spaniel',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tibetansk_spaniel.jpg/220px-Tibetansk_spaniel.jpg'
  },
  {
    value: 'tibetan terrier',
    label: 'Tibetan Terrier',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tibet_Terrier_Bennie_%28cropped%29.jpg/220px-Tibet_Terrier_Bennie_%28cropped%29.jpg'
  },
  {
    value: 'tonya finosu',
    label: 'Tonya Finosu',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'tornjak',
    label: 'Tornjak',
    origin: 'Bosnia and Herzegovina, Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bosniantornjak.jpg/220px-Bosniantornjak.jpg'
  },
  {
    value: 'tosa inu',
    label: 'Tosa Inu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/BUKADAI_2.jpg/220px-BUKADAI_2.jpg'
  },
  {
    value: 'toy fox terrier',
    label: 'Toy Fox Terrier',
    origin: 'America',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Toy_Fox_Terrier_2.jpg/220px-Toy_Fox_Terrier_2.jpg'
  },
  {
    value: 'toy manchester terrier',
    label: 'Toy Manchester Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Toy-manchester-terrier-weave.png/220px-Toy-manchester-terrier-weave.png'
  },
  {
    value: 'transylvanian hound',
    label: 'Transylvanian Hound',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Erdelyi_kopo_VadaszNimrodSzeder01.jpg/220px-Erdelyi_kopo_VadaszNimrodSzeder01.jpg'
  },
  {
    value: 'treeing cur',
    label: 'Treeing Cur',
    origin: 'United States',
    img: 'Not available'
  },
  {
    value: 'treeing feist',
    label: 'Treeing Feist',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0809bigun.jpg/220px-0809bigun.jpg'
  },
  {
    value: 'treeing tennessee brindle',
    label: 'Treeing Tennessee Brindle',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sienna_TTBD.jpg/220px-Sienna_TTBD.jpg'
  },
  {
    value: 'treeing walker coonhound',
    label: 'Treeing Walker Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Treeing-walker-coonhound-standing.jpg/220px-Treeing-walker-coonhound-standing.jpg'
  },
  {
    value: 'trigg hound',
    label: 'Trigg Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/AmericanFoxhound2.jpg/220px-AmericanFoxhound2.jpg'
  },
  {
    value: 'tyrolean hound',
    label: 'Tyrolean Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tiroler_Bracke.jpg/220px-Tiroler_Bracke.jpg'
  },
  {
    value: 'vikhan',
    label: 'Vikhan',
    origin: 'Pakistan, India',
    img: 'Not available'
  },
  {
    value: 'villano de las encartaciones',
    label: 'Villano de Las Encartaciones',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Zakur_billanoa_Oramaiztegin_%28cropped%29.JPG/220px-Zakur_billanoa_Oramaiztegin_%28cropped%29.JPG'
  },
  {
    value: 'villanuco de las encartaciones',
    label: 'Villanuco de Las Encartaciones',
    origin: 'Spain',
    img: 'Not available'
  },
  {
    value: 'vizsla',
    label: 'Vizsla',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg/220px-Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg'
  },
  {
    value: 'volpino italiano',
    label: 'Volpino Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Szpic_miniaturowy_Volpino_MWPR_Katowice_2008_%28cropped%29.JPG/220px-Szpic_miniaturowy_Volpino_MWPR_Katowice_2008_%28cropped%29.JPG'
  },
  {
    value: 'weimaraner',
    label: 'Weimaraner',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Weimaraner_wb.jpg/220px-Weimaraner_wb.jpg'
  },
  {
    value: 'welsh hound',
    label: 'Welsh Hound',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Welsh_Hound_from_1915.JPG/220px-Welsh_Hound_from_1915.JPG'
  },
  {
    value: 'welsh sheepdog',
    label: 'Welsh Sheepdog',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Welsh_Sheepdog.jpg/220px-Welsh_Sheepdog.jpg'
  },
  {
    value: 'welsh springer spaniel',
    label: 'Welsh Springer Spaniel',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Welsh_Springer_Spaniel_1.jpg/220px-Welsh_Springer_Spaniel_1.jpg'
  },
  {
    value: 'welsh terrier',
    label: 'Welsh Terrier',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Terier_walijski_suka_2009_pl.jpg/220px-Terier_walijski_suka_2009_pl.jpg'
  },
  {
    value: 'west country harrier',
    label: 'West Country Harrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hounds_-_their_breeding_and_kennel_management_%281905%29_%2814740587676%29.jpg/220px-Hounds_-_their_breeding_and_kennel_management_%281905%29_%2814740587676%29.jpg'
  },
  {
    value: 'west highland white terrier',
    label: 'West Highland White Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/West_Highland_White_Terrier_Krakow.jpg/220px-West_Highland_White_Terrier_Krakow.jpg'
  },
  {
    value: 'west siberian laika',
    label: 'West Siberian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/West_Siberian_Laika.jpg/220px-West_Siberian_Laika.jpg'
  },
  {
    value: 'westphalian dachsbracke',
    label: 'Westphalian Dachsbracke',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Westf%C3%A4lische_Dachsbracke.jpg/220px-Westf%C3%A4lische_Dachsbracke.jpg'
  },
  {
    value: 'wetterhoun',
    label: 'Wetterhoun',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fryzyjski_pies_wodny_u68.jpg/220px-Fryzyjski_pies_wodny_u68.jpg'
  },
  {
    value: 'whippet',
    label: 'Whippet',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Whippet_2018_6.jpg/220px-Whippet_2018_6.jpg'
  },
  {
    value: 'white shepherd',
    label: 'White Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kandestack_62406.jpg/220px-Kandestack_62406.jpg'
  },
  {
    value: 'white swiss shepherd dog',
    label: 'White Swiss Shepherd Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/White_Swiss_Shepherd_Dog_Djinn_%28cropped%29.JPG/220px-White_Swiss_Shepherd_Dog_Djinn_%28cropped%29.JPG'
  },
  {
    value: 'wire fox terrier',
    label: 'Wire Fox Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Elias1%C4%8Derven2006.jpg/220px-Elias1%C4%8Derven2006.jpg'
  },
  {
    value: 'wirehaired pointing griffon',
    label: 'Wirehaired Pointing Griffon',
    origin: 'Netherlands, Germany, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GCH_Int_Ch_UCH_Zerubbabel_von_Herrenhausen_CGC_MHA.jpg/220px-GCH_Int_Ch_UCH_Zerubbabel_von_Herrenhausen_CGC_MHA.jpg'
  },
  {
    value: 'wirehaired vizsla',
    label: 'Wirehaired Vizsla',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dr%C3%B3tosvizsla_vadat_%C3%A1ll.jpg/220px-Dr%C3%B3tosvizsla_vadat_%C3%A1ll.jpg'
  },
  {
    value: 'xiasi dog',
    label: 'Xiasi Dog',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xiasi_Quan_dog.jpg/220px-Xiasi_Quan_dog.jpg'
  },
  {
    value: 'xoloitzcuintle',
    label: 'Xoloitzcuintle',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg/220px-BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg'
  },
  {
    value: 'yakutian laika',
    label: 'Yakutian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Yl01.jpg/220px-Yl01.jpg'
  },
  {
    value: 'yorkshire terrier',
    label: 'Yorkshire Terrier',
    origin: 'Yorkshire, England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%282_version%29_Grupp_3%2C_YORKSHIRETERRIER%2C_NO_UCH_SE_UCH_Oxzar_Amazing_Bel%E2%80%99s_Toffy_%2824310212305%29.jpg/220px-%282_version%29_Grupp_3%2C_YORKSHIRETERRIER%2C_NO_UCH_SE_UCH_Oxzar_Amazing_Bel%E2%80%99s_Toffy_%2824310212305%29.jpg'
  },
  {
    value: 'zerdava',
    label: 'Zerdava',
    origin: 'Turkey, Georgia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Zerdava_dog.jpg/220px-Zerdava_dog.jpg'
  },
  {
    value: 'african hairless dog',
    label: 'African hairless dog',
    origin: 'Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Africanhairless.jpg/220px-Africanhairless.jpg'
  },
  {
    value: 'alaunt',
    label: 'Alaunt',
    origin: 'Pontic-Caspian Steppe',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alaunt_in_Adorazione_dei_Magi_by_Gentile_da_Fabriano.jpg/220px-Alaunt_in_Adorazione_dei_Magi_by_Gentile_da_Fabriano.jpg'
  },
  {
    value: 'alpine mastiff',
    label: 'Alpine Mastiff',
    origin: 'Swiss and Italian Alps',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/1815_Alpine_Mastiff.jpg/220px-1815_Alpine_Mastiff.jpg'
  },
  {
    value: 'belgian mastiff',
    label: 'Belgian Mastiff',
    origin: 'Belgium and the Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Draught_Dog_from_1915.JPG/220px-Draught_Dog_from_1915.JPG'
  },
  {
    value: 'black and tan terrier',
    label: 'Black and Tan Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Old_English_Black_and_Tan_Terrier.jpg/220px-Old_English_Black_and_Tan_Terrier.jpg'
  },
  {
    value: 'blue paul terrier',
    label: 'Blue Paul Terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg/220px-Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg'
  },
  {
    value: 'braque dupuy',
    label: 'Braque Dupuy',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dupuy_Pointer_from_1915.JPG/220px-Dupuy_Pointer_from_1915.JPG'
  },
  {
    value: 'buckhound',
    label: 'Buckhound',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/William_H_Hopkins_%28active_1853-1890-d._1892%29_-_Her_Majesty%27s_Buckhounds_with_the_Earl_of_Hardwicke%2C_Huntsmen_and_Whips_-_RCIN_407840_-_Royal_Collection.jpg/220px-William_H_Hopkins_%28active_1853-1890-d._1892%29_-_Her_Majesty%27s_Buckhounds_with_the_Earl_of_Hardwicke%2C_Huntsmen_and_Whips_-_RCIN_407840_-_Royal_Collection.jpg'
  },
  {
    value: 'bull and terrier',
    label: 'Bull and terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg/220px-Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg'
  },
  {
    value: 'bullenbeisser',
    label: 'Bullenbeisser',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bullenbeiser.jpg/220px-Bullenbeiser.jpg'
  },
  {
    value: 'chien-gris',
    label: 'Chien-gris',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Gris_De_Saint-Louis_from_1915.JPG/220px-Gris_De_Saint-Louis_from_1915.JPG'
  },
  {
    value: 'chiribaya dog',
    label: 'Chiribaya Dog',
    origin: 'Peru',
    img: 'Not available'
  },
  {
    value: 'córdoba fighting dog',
    label: 'Córdoba fighting dog',
    origin: 'Argentina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Patan.jpg/220px-Patan.jpg'
  },
  {
    value: 'cumberland sheepdog',
    label: 'Cumberland Sheepdog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cumberland-sheepdog.jpg/220px-Cumberland-sheepdog.jpg'
  },
  {
    value: 'cur',
    label: 'Cur',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cur_dog%2C_A_general_history_of_quadrupeds.jpg/220px-Cur_dog%2C_A_general_history_of_quadrupeds.jpg'
  },
  {
    value: 'dalbo dog',
    label: 'Dalbo dog',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dalbohund.jpg/220px-Dalbohund.jpg'
  },
  {
    value: 'dogo cubano',
    label: 'Dogo Cubano',
    origin: 'Cuba',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DogoCubano2.jpg/220px-DogoCubano2.jpg'
  },
  {
    value: 'dumfriesshire black and tan foxhound',
    label: 'Dumfriesshire Black and Tan Foxhound',
    origin: 'United Kingdom',
    img: 'Not available'
  },
  {
    value: 'english water spaniel',
    label: 'English Water Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/English_Water_Spaniel.jpg/220px-English_Water_Spaniel.jpg'
  },
  {
    value: 'english white terrier',
    label: 'English White Terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Old_English_White_Terrier.jpg/220px-Old_English_White_Terrier.jpg'
  },
  {
    value: 'fila da terceira',
    label: 'Fila da Terceira',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Fila_de_Terceira.jpg/220px-Fila_de_Terceira.jpg'
  },
  {
    value: 'fuegian dog',
    label: 'Fuegian dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'grand fauve de bretagne',
    label: 'Grand Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Grand_Fauve_de_Bretagne.jpg/220px-Grand_Fauve_de_Bretagne.jpg'
  },
  {
    value: 'halls heeler',
    label: 'Halls Heeler',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Front_drive_up_to_Trackson%27s_property.jpg/220px-Front_drive_up_to_Trackson%27s_property.jpg'
  },
  {
    value: 'hare indian dog',
    label: 'Hare Indian Dog',
    origin: 'CanadaUnited States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hareindiandog.jpg/220px-Hareindiandog.jpg'
  },
  {
    value: 'hawaiian poi dog',
    label: 'Hawaiian Poi Dog',
    origin: 'Hawaii (United States)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hawaiian_natives_wearing_kihei%2C_with_animals%2C_sketch_by_Louis_Choris_%28crop%2C_central_dog%29.jpg/220px-Hawaiian_natives_wearing_kihei%2C_with_animals%2C_sketch_by_Louis_Choris_%28crop%2C_central_dog%29.jpg'
  },
  {
    value: "king's white hound",
    label: "King's White Hound",
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jean-Baptiste_Oudry_-_La_chasse_au_chevreuilt_%281725%29.jpg/220px-Jean-Baptiste_Oudry_-_La_chasse_au_chevreuilt_%281725%29.jpg'
  },
  {
    value: 'kurī',
    label: 'Kurī',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Otago_Museum_Kuri_-_OMNZVT2162_03_%28cropped%29.jpg/220px-Otago_Museum_Kuri_-_OMNZVT2162_03_%28cropped%29.jpg'
  },
  {
    value: 'lapponian shepherd',
    label: 'Lapponian Shepherd',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'limer',
    label: 'Limer',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'marquesan dog',
    label: 'Marquesan Dog',
    origin: 'Marquesas Islands (French Polynesia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dog_relief_from_me%CA%BBae_I%CA%BBipona%2C_Puama%CA%BBu_Village%2C_Hiva_Oa%2C_Marquesas_Islands%2C_photograph_by_Moth_Clark%2C_2009_%28levels_adjusted%29.jpg/300px-Dog_relief_from_me%CA%BBae_I%CA%BBipona%2C_Puama%CA%BBu_Village%2C_Hiva_Oa%2C_Marquesas_Islands%2C_photograph_by_Moth_Clark%2C_2009_%28levels_adjusted%29.jpg'
  },
  {
    value: 'molossus',
    label: 'Molossus',
    origin: 'Epirus, ancient Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Molossian_Hound%2C_British_Museum.jpg/220px-Molossian_Hound%2C_British_Museum.jpg'
  },
  {
    value: 'moscow water dog',
    label: 'Moscow Water Dog',
    origin: 'Russia',
    img: 'Not available'
  },
  {
    value: 'norfolk spaniel',
    label: 'Norfolk Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dash-II-Norfolk-Spaniel.jpg/220px-Dash-II-Norfolk-Spaniel.jpg'
  },
  {
    value: 'norman hound',
    label: 'Norman Hound',
    origin: 'France',
    img: 'Not available'
  },
  {
    value: 'north country beagle',
    label: 'North Country Beagle',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Beagle_%28PSF%29.png/220px-Beagle_%28PSF%29.png'
  },
  {
    value: 'old croatian sighthound',
    label: 'Old Croatian Sighthound',
    origin: 'Bosnia–Herzegovina & Croatia',
    img: 'Not available'
  },
  {
    value: 'old english bulldog',
    label: 'Old English Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/CribandRosa1811.jpg/220px-CribandRosa1811.jpg'
  },
  {
    value: 'old spanish pointer',
    label: 'Old Spanish Pointer',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spanish_Pointer_from_1915.JPG/220px-Spanish_Pointer_from_1915.JPG'
  },
  {
    value: 'old welsh grey sheepdog',
    label: 'Old Welsh Grey Sheepdog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'paisley terrier',
    label: 'Paisley Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Paisley1903.jpg/220px-Paisley1903.jpg'
  },
  {
    value: 'polynesian dog',
    label: 'Polynesian Dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'rache',
    label: 'Rache',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'rastreador brasileiro',
    label: 'Rastreador Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rastreadora_Brasileira_Gaya.jpg/220px-Rastreadora_Brasileira_Gaya.jpg'
  },
  {
    value: "saint john's water dog",
    label: "Saint John's water dog",
    origin: 'Newfoundland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/St_Johns_dog.jpg/220px-St_Johns_dog.jpg'
  },
  {
    value: 'sakhalin husky',
    label: 'Sakhalin Husky',
    origin: 'Russia and Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sakhalin_Husky_Jiro.JPG/220px-Sakhalin_Husky_Jiro.JPG'
  },
  {
    value: 'salish wool dog',
    label: 'Salish Wool Dog',
    origin: 'Washington state and British Columbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/PaulKane_-_A_Woman_Weaving_a_Blanket_%28ROM2005_5163%29.jpg/220px-PaulKane_-_A_Woman_Weaving_a_Blanket_%28ROM2005_5163%29.jpg'
  },
  {
    value: 'sleuth hound',
    label: 'Sleuth hound',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'southern hound',
    label: 'Southern Hound',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Southern_Hound.jpg/220px-Southern_Hound.jpg'
  },
  {
    value: 'staghound',
    label: 'Staghound',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/John_Scott%27s_Stag_hound%2C_The_sportsman%27s_repository%2C_1845.jpg/220px-John_Scott%27s_Stag_hound%2C_The_sportsman%27s_repository%2C_1845.jpg'
  },
  {
    value: 'tahitian dog',
    label: 'Tahitian Dog',
    origin: 'Tahiti, Society Islands (French Polynesia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Double_canoes._Tipaerua%2C_1769-71_%28crop_of_dog%29.jpg/220px-Double_canoes._Tipaerua%2C_1769-71_%28crop_of_dog%29.jpg'
  },
  {
    value: 'tahltan bear dog',
    label: 'Tahltan Bear Dog',
    origin: 'Northern Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Tahltan_Bear_Dog_sketch2.jpg/220px-Tahltan_Bear_Dog_sketch2.jpg'
  },
  {
    value: 'talbot hound',
    label: 'Talbot Hound',
    origin: 'Uncertain, possibly Belgium / France (Normandy) or England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/TalbotHound_Talbot_Shrewsbury_Book_1445.png/220px-TalbotHound_Talbot_Shrewsbury_Book_1445.png'
  },
  {
    value: 'techichi',
    label: 'Techichi',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Colima_-_Dog_Effigy_-_Walters_20092051_-_Three_Quarter_Left.jpg/220px-Colima_-_Dog_Effigy_-_Walters_20092051_-_Three_Quarter_Left.jpg'
  },
  {
    value: 'tesem',
    label: 'Tesem',
    origin: 'Egypt',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tesem_couple.png/220px-Tesem_couple.png'
  },
  {
    value: 'toy bulldog',
    label: 'Toy Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Toy_Bulldog_Little_Knot_1903.jpg/220px-Toy_Bulldog_Little_Knot_1903.jpg'
  },
  {
    value: 'toy trawler spaniel',
    label: 'Toy Trawler Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Trawler_spaniel_goblin.jpg/220px-Trawler_spaniel_goblin.jpg'
  },
  {
    value: 'turnspit dog',
    label: 'Turnspit dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Turnspitdog-1862.jpg/300px-Turnspitdog-1862.jpg'
  },
  {
    value: 'tweed water spaniel',
    label: 'Tweed Water Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tweed_Water_Spaniel.jpg/220px-Tweed_Water_Spaniel.jpg'
  },
  {
    value: 'welsh hillman',
    label: 'Welsh Hillman',
    origin: 'Wales',
    img: 'Not available'
  },
  {
    value: 'africanis',
    label: 'Africanis',
    origin: 'Southern Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Africanis_%281%29.jpg/220px-Africanis_%281%29.jpg'
  },
  {
    value: 'saint-usuge spaniel',
    label: 'Saint-Usuge Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EpagneuldeSaintUsuge.jpg/220px-EpagneuldeSaintUsuge.jpg'
  },
  {
    value: 'aidi',
    label: 'Aidi',
    origin: 'Morocco (standard holder) Maghreb (region of origin)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Aidi.jpg/220px-Aidi.jpg'
  },
  {
    value: 'coton de tuléar',
    label: 'Coton de Tuléar',
    origin: 'Madagascar',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coton_de_Tular_1.jpg/220px-Coton_de_Tular_1.jpg'
  }
];

export default breeds;
