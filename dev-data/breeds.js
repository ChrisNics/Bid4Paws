const breeds = [
  {
    value: 'Akbash',
    label: 'Akbash',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Akba%C5%9F_cinsi_k%C3%B6pek.jpg/220px-Akba%C5%9F_cinsi_k%C3%B6pek.jpg'
  },
  {
    value: 'Akita',
    label: 'Akita',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Akita_Collage.png/220px-Akita_Collage.png'
  },
  {
    value: 'Aksaray Malaklisi',
    label: 'Aksaray Malaklisi',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Aksaray_malaklisi_beto.jpg/220px-Aksaray_malaklisi_beto.jpg'
  },
  {
    value: 'Alano Español',
    label: 'Alano Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spanishalanobrindle4.jpg/220px-Spanishalanobrindle4.jpg'
  },
  {
    value: 'Alapaha Blue Blood Bulldog',
    label: 'Alapaha Blue Blood Bulldog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alapaha_Blue-Blood_Bulldog.jpg/220px-Alapaha_Blue-Blood_Bulldog.jpg'
  },
  {
    value: 'Alaskan Husky',
    label: 'Alaskan Husky',
    origin: 'United States (Alaska)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Alaskan_husky_at_Riley_Creek_Campground_%2812712975923%29.jpg/220px-Alaskan_husky_at_Riley_Creek_Campground_%2812712975923%29.jpg'
  },
  {
    value: 'Alaskan Klee Kai',
    label: 'Alaskan Klee Kai',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/WOWAKK-Kukai-Alaskan-Klee-Kai.jpg/220px-WOWAKK-Kukai-Alaskan-Klee-Kai.jpg'
  },
  {
    value: 'Alaskan Malamute',
    label: 'Alaskan Malamute',
    origin: 'Alaska',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Alaskan_Malamute.jpg/235px-Alaskan_Malamute.jpg'
  },
  {
    value: 'Alopekis',
    label: 'Alopekis',
    origin: 'Greece mainly in the Serres region.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alopekis_white_male.jpg/220px-Alopekis_white_male.jpg'
  },
  {
    value: 'Alpine Dachsbracke',
    label: 'Alpine Dachsbracke',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alpejski_go%C5%84czy_kr%C3%B3tkono%C5%BCny_g99.jpg/220px-Alpejski_go%C5%84czy_kr%C3%B3tkono%C5%BCny_g99.jpg'
  },
  {
    value: 'American Bulldog',
    label: 'American Bulldog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Faithfullbull_Spike_of_Mightybull.jpg/220px-Faithfullbull_Spike_of_Mightybull.jpg'
  },
  {
    value: 'American Bully',
    label: 'American Bully',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Champion_Charlie_Muscles_%282%29.jpg/220px-Champion_Charlie_Muscles_%282%29.jpg'
  },
  {
    value: 'American Cocker Spaniel',
    label: 'American Cocker Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PointbreakHoneyimHome.jpg/220px-PointbreakHoneyimHome.jpg'
  },
  {
    value: 'American English Coonhound',
    label: 'American English Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/English_Coonhound.jpg/220px-English_Coonhound.jpg'
  },
  {
    value: 'American Eskimo Dog',
    label: 'American Eskimo Dog',
    origin: 'United StatesGermany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Eskimo_Dog_1.jpg/220px-American_Eskimo_Dog_1.jpg'
  },
  {
    value: 'American Foxhound',
    label: 'American Foxhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/AmericanFoxhound2.jpg/220px-AmericanFoxhound2.jpg'
  },
  {
    value: 'American Hairless Terrier',
    label: 'American Hairless Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Aht-sable%26white3.jpg/220px-Aht-sable%26white3.jpg'
  },
  {
    value: 'American Leopard Hound',
    label: 'American Leopard Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/American_Leopard_Hound.jpg/220px-American_Leopard_Hound.jpg'
  },
  {
    value: 'American Pit Bull Terrier',
    label: 'American Pit Bull Terrier',
    origin: 'USA',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/IMG-20210617-WA0002.jpg/220px-IMG-20210617-WA0002.jpg'
  },
  {
    value: 'American Staffordshire Terrier',
    label: 'American Staffordshire Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AMERICAN_STAFFORDSHIRE_TERRIER%2C_Zican%E2%80%99s_Bz_Ez_Dragon_%2824208348891%29.2.jpg/220px-AMERICAN_STAFFORDSHIRE_TERRIER%2C_Zican%E2%80%99s_Bz_Ez_Dragon_%2824208348891%29.2.jpg'
  },
  {
    value: 'American Water Spaniel',
    label: 'American Water Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chien_d%27eau_americain_champion_1.JPG/220px-Chien_d%27eau_americain_champion_1.JPG'
  },
  {
    value: 'Anglo-Français de Petite Vénerie',
    label: 'Anglo-Français de Petite Vénerie',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Anglo-Fran%C3%A7ais_de_petite_v%C3%A9nerie.jpg'
  },
  {
    value: 'Appenzeller Sennenhund',
    label: 'Appenzeller Sennenhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Eisa_Kessy_v_Br%C3%BCnggberg.jpg/220px-Eisa_Kessy_v_Br%C3%BCnggberg.jpg'
  },
  {
    value: 'Ariège Pointer',
    label: 'Ariège Pointer',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pointer_of_Ariege_from_1915.JPG/220px-Pointer_of_Ariege_from_1915.JPG'
  },
  {
    value: 'Ariegeois',
    label: 'Ariegeois',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ariegeois.jpg/220px-Ariegeois.jpg'
  },
  {
    value: 'Armant',
    label: 'Armant',
    origin: 'Egypt',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Armant_dog%2C_with_some_orange_stuff_and_trees_in_background.jpg'
  },
  {
    value: 'Armenian Gampr',
    label: 'Armenian Gampr',
    origin: 'Armenia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Armenian_Gampr_01.jpg/220px-Armenian_Gampr_01.jpg'
  },
  {
    value: 'Artois Hound',
    label: 'Artois Hound',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Artois_from_1915.JPG/220px-Artois_from_1915.JPG'
  },
  {
    value: 'Assyrian Mastiff',
    label: 'Assyrian Mastiff',
    origin: 'Assyria',
    img: 'Not available'
  },
  {
    value: 'Australian Cattle Dog',
    label: 'Australian Cattle Dog',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ACD-blue-spud.jpg/220px-ACD-blue-spud.jpg'
  },
  {
    value: 'Australian Kelpie',
    label: 'Australian Kelpie',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hilu_the_Australian_Kelpie_dog.jpg/220px-Hilu_the_Australian_Kelpie_dog.jpg'
  },
  {
    value: 'Australian Shepherd',
    label: 'Australian Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Australian_Shepherd_red_bi.JPG/220px-Australian_Shepherd_red_bi.JPG'
  },
  {
    value: 'Australian Stumpy Tail Cattle Dog',
    label: 'Australian Stumpy Tail Cattle Dog',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Australian_Stumpy_Tail_Cattle_Dog.jpg/220px-Australian_Stumpy_Tail_Cattle_Dog.jpg'
  },
  {
    value: 'Australian Terrier',
    label: 'Australian Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Australian_Terrier_adult_male.jpg/220px-Australian_Terrier_adult_male.jpg'
  },
  {
    value: 'Austrian Black and Tan Hound',
    label: 'Austrian Black and Tan Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Brandlbracke.JPG/220px-Brandlbracke.JPG'
  },
  {
    value: 'Austrian Pinscher',
    label: 'Austrian Pinscher',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pinczer_austiacki_678.jpg/220px-Pinczer_austiacki_678.jpg'
  },
  {
    value: 'Azawakh',
    label: 'Azawakh',
    origin: 'Mali, Niger, Burkina Faso',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bistrita_2015_%2822%29.jpg/220px-Bistrita_2015_%2822%29.jpg'
  },
  {
    value: 'Bắc Hà dog',
    label: 'Bắc Hà dog',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/B%E1%BA%AFc_H%C3%A0_dog_side.jpg/220px-B%E1%BA%AFc_H%C3%A0_dog_side.jpg'
  },
  {
    value: 'Bakharwal dog',
    label: 'Bakharwal dog',
    origin: 'Indian subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bakarwal.jpg/220px-Bakarwal.jpg'
  },
  {
    value: 'Banjara Hound',
    label: 'Banjara Hound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Banjara_from_1915.JPG/220px-Banjara_from_1915.JPG'
  },
  {
    value: 'Bankhar Dog',
    label: 'Bankhar Dog',
    origin: 'Russia, Mongolia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Hotosho-1.jpg/220px-Hotosho-1.jpg'
  },
  {
    value: 'Barak hound',
    label: 'Barak hound',
    origin: 'Bosnia and Herzegovina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg/220px-BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg'
  },
  {
    value: 'Barbado da Terceira',
    label: 'Barbado da Terceira',
    origin: 'Azores, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Barbado_da_Terceira_%28young_female%29.jpg/220px-Barbado_da_Terceira_%28young_female%29.jpg'
  },
  {
    value: 'Barbet',
    label: 'Barbet',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Chien_de_race_Barbet.jpg/220px-Chien_de_race_Barbet.jpg'
  },
  {
    value: 'Basenji',
    label: 'Basenji',
    origin: 'Democratic Republic of the Congo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Basenji_Profile_%28loosercrop%29.jpg/220px-Basenji_Profile_%28loosercrop%29.jpg'
  },
  {
    value: 'Basque Shepherd Dog',
    label: 'Basque Shepherd Dog',
    origin: 'Basque Country (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pastor_vasco_m_14months_loby_3018.jpg/220px-Pastor_vasco_m_14months_loby_3018.jpg'
  },
  {
    value: 'Basset Artésien Normand',
    label: 'Basset Artésien Normand',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg/220px-Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg'
  },
  {
    value: 'Basset Bleu de Gascogne',
    label: 'Basset Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Basset_bleu_de_Gascogne.jpg/220px-Basset_bleu_de_Gascogne.jpg'
  },
  {
    value: 'Basset Fauve de Bretagne',
    label: 'Basset Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Basset_Fauve_de_Bretagne_600.jpg/220px-Basset_Fauve_de_Bretagne_600.jpg'
  },
  {
    value: 'Basset Hound',
    label: 'Basset Hound',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BassetHound_profil.jpg/220px-BassetHound_profil.jpg'
  },
  {
    value: 'Bavarian Mountain Hound',
    label: 'Bavarian Mountain Hound',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Zoran_Spod_Ruskiej_Granicy_the_Bavarian_Mountain_Hound.jpg/220px-Zoran_Spod_Ruskiej_Granicy_the_Bavarian_Mountain_Hound.jpg'
  },
  {
    value: 'Airedale Terrier',
    label: 'Airedale Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Airedale_Terrier.jpg/220px-Airedale_Terrier.jpg'
  },
  {
    value: 'Beagle-Harrier',
    label: 'Beagle-Harrier',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Beagle_harrier.JPG/220px-Beagle_harrier.JPG'
  },
  {
    value: 'Bearded Collie',
    label: 'Bearded Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bearded_Collie_600.jpg/220px-Bearded_Collie_600.jpg'
  },
  {
    value: 'Beauceron',
    label: 'Beauceron',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Owczarek_francuski_beauceron_009pl.jpg/220px-Owczarek_francuski_beauceron_009pl.jpg'
  },
  {
    value: 'Bedlington Terrier',
    label: 'Bedlington Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Boutchie_apres_championnat_004.JPG/220px-Boutchie_apres_championnat_004.JPG'
  },
  {
    value: 'Belgian Shepherd',
    label: 'Belgian Shepherd',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tervuren.jpg/220px-Tervuren.jpg'
  },
  {
    value: 'Bergamasco Shepherd',
    label: 'Bergamasco Shepherd',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ortensia_di_Valle_Scrivia.jpg/220px-Ortensia_di_Valle_Scrivia.jpg'
  },
  {
    value: 'Berger Picard',
    label: 'Berger Picard',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Picard_Delice_Stacked.jpg/220px-Picard_Delice_Stacked.jpg'
  },
  {
    value: 'Bernese Mountain Dog',
    label: 'Bernese Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Othello.jpg/220px-Othello.jpg'
  },
  {
    value: 'Bichon Frisé',
    label: 'Bichon Frisé',
    origin: 'Canary Islands (Spain)Belgium/France (later development)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bichon_Fris%C3%A9_-_studdogbichon.jpg/220px-Bichon_Fris%C3%A9_-_studdogbichon.jpg'
  },
  {
    value: 'Billy',
    label: 'Billy',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Poitou_Hound_from_1915.JPG/220px-Poitou_Hound_from_1915.JPG'
  },
  {
    value: 'Black and Tan Coonhound',
    label: 'Black and Tan Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Black_and_Tan_Coonhound.jpg/220px-Black_and_Tan_Coonhound.jpg'
  },
  {
    value: 'Black Norwegian Elkhound',
    label: 'Black Norwegian Elkhound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/BlackNorwegianElkhound.jpg/220px-BlackNorwegianElkhound.jpg'
  },
  {
    value: 'Black Russian Terrier',
    label: 'Black Russian Terrier',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Russianblack.jpg/220px-Russianblack.jpg'
  },
  {
    value: 'Black Mouth Cur',
    label: 'Black Mouth Cur',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Black_mouth_cur-10.jpg/220px-Black_mouth_cur-10.jpg'
  },
  {
    value: 'Bloodhound',
    label: 'Bloodhound',
    origin: 'Belgium, France &United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bloodhound_Erland22.jpg/220px-Bloodhound_Erland22.jpg'
  },
  {
    value: 'Blue Lacy',
    label: 'Blue Lacy',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BlueLacyPhoto1.jpg/220px-BlueLacyPhoto1.jpg'
  },
  {
    value: 'Blue Picardy Spaniel',
    label: 'Blue Picardy Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Epagneul_bleu_de_picardie_868.jpg/220px-Epagneul_bleu_de_picardie_868.jpg'
  },
  {
    value: 'Bluetick Coonhound',
    label: 'Bluetick Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/BluetickCoonhound.jpg/220px-BluetickCoonhound.jpg'
  },
  {
    value: 'Boerboel',
    label: 'Boerboel',
    origin: 'South Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Boerboel_fawn_border.jpg/220px-Boerboel_fawn_border.jpg'
  },
  {
    value: 'Bohemian Shepherd',
    label: 'Bohemian Shepherd',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/OREADY_KROSANDRA_%2814%29.JPG/220px-OREADY_KROSANDRA_%2814%29.JPG'
  },
  {
    value: 'Bolognese',
    label: 'Bolognese',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DocFile_Bolognese.jpg/220px-DocFile_Bolognese.jpg'
  },
  {
    value: 'Border Collie',
    label: 'Border Collie',
    origin: 'Anglo-Scottish border',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Blue_Merle_Border_Collie._Female.jpg/220px-Blue_Merle_Border_Collie._Female.jpg'
  },
  {
    value: 'Border Terrier',
    label: 'Border Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Border_Terrier.jpg/220px-Border_Terrier.jpg'
  },
  {
    value: 'Borzoi',
    label: 'Borzoi',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg/220px-Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg'
  },
  {
    value: 'Boston Terrier',
    label: 'Boston Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston-terrier-carlos-de.JPG/220px-Boston-terrier-carlos-de.JPG'
  },
  {
    value: 'Bouvier des Ardennes',
    label: 'Bouvier des Ardennes',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Boyero-de-las-ardenas7.jpg/220px-Boyero-de-las-ardenas7.jpg'
  },
  {
    value: 'Bouvier des Flandres',
    label: 'Bouvier des Flandres',
    origin: 'Belgium (Flanders); France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bouvier.JPG/220px-Bouvier.JPG'
  },
  {
    value: 'Boxer',
    label: 'Boxer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Male_fawn_Boxer_undocked.jpg/220px-Male_fawn_Boxer_undocked.jpg'
  },
  {
    value: 'Boykin Spaniel',
    label: 'Boykin Spaniel',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Boykin_Spaniel_April_Jet.jpg/220px-Boykin_Spaniel_April_Jet.jpg'
  },
  {
    value: 'Bracco Italiano',
    label: 'Bracco Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Giotto_BI.jpg/220px-Giotto_BI.jpg'
  },
  {
    value: "Braque d'Auvergne",
    label: "Braque d'Auvergne",
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Braque_d_Auvergne.jpg/220px-Braque_d_Auvergne.jpg'
  },
  {
    value: 'Braque du Bourbonnais',
    label: 'Braque du Bourbonnais',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Braque_du_Bourbonnais.jpg/220px-Braque_du_Bourbonnais.jpg'
  },
  {
    value: 'Braque Français',
    label: 'Braque Français',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0805_braque_francais_text.jpg/220px-0805_braque_francais_text.jpg'
  },
  {
    value: 'Braque Saint-Germain',
    label: 'Braque Saint-Germain',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Braque_saint-germain_666.jpg/220px-Braque_saint-germain_666.jpg'
  },
  {
    value: 'Briard',
    label: 'Briard',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Briard_fauve.JPG/220px-Briard_fauve.JPG'
  },
  {
    value: 'Briquet Griffon Vendéen',
    label: 'Briquet Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Briquet_Griffon_Vendeen.jpg/220px-Briquet_Griffon_Vendeen.jpg'
  },
  {
    value: 'Brittany',
    label: 'Brittany',
    origin: 'Brittany, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Brittany_standing.jpg/220px-American_Brittany_standing.jpg'
  },
  {
    value: 'Broholmer',
    label: 'Broholmer',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Male_Broholmer.jpg/220px-Male_Broholmer.jpg'
  },
  {
    value: 'Bruno Jura Hound',
    label: 'Bruno Jura Hound',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/09057110_Jura_Laufhund.jpg/220px-09057110_Jura_Laufhund.jpg'
  },
  {
    value: 'Brussels Griffon',
    label: 'Brussels Griffon',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Monkey_Bizniz_Drama_Queen.jpg/220px-Monkey_Bizniz_Drama_Queen.jpg'
  },
  {
    value: 'Bucovina Shepherd Dog',
    label: 'Bucovina Shepherd Dog',
    origin: 'Romania (Southeastern Europe)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bucovina_Sheepdog.jpg/220px-Bucovina_Sheepdog.jpg'
  },
  {
    value: 'Bull Arab',
    label: 'Bull Arab',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bull_Arab_%28dog%29.jpg/220px-Bull_Arab_%28dog%29.jpg'
  },
  {
    value: 'Bull Terrier',
    label: 'Bull Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bullterrier-3453301920.jpg/220px-Bullterrier-3453301920.jpg'
  },
  {
    value: 'Bulldog',
    label: 'Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/220px-Bulldog_inglese.jpg'
  },
  {
    value: 'Bullmastiff',
    label: 'Bullmastiff',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bullmastiff_edited.JPG/220px-Bullmastiff_edited.JPG'
  },
  {
    value: 'Bully Kutta',
    label: 'Bully Kutta',
    origin: 'Indian Subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/BullyDogs.Pakistan.jpg/220px-BullyDogs.Pakistan.jpg'
  },
  {
    value: 'Burgos Pointer',
    label: 'Burgos Pointer',
    origin: 'Castile and León (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Burgos_Pointer_or_Perdiguero_de_Burgos.JPG/220px-Burgos_Pointer_or_Perdiguero_de_Burgos.JPG'
  },
  {
    value: 'Ca Mè Mallorquí',
    label: 'Ca Mè Mallorquí',
    origin: 'Spain (Majorca, Balearic Islands)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg/220px-Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg'
  },
  {
    value: 'Ca de Bou',
    label: 'Ca de Bou',
    origin: 'Spain (Majorca)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ZarcoBruno2015.jpg/220px-ZarcoBruno2015.jpg'
  },
  {
    value: 'Cairn Terrier',
    label: 'Cairn Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cairn-Terrier-Garten1.jpg/220px-Cairn-Terrier-Garten1.jpg'
  },
  {
    value: 'Calupoh',
    label: 'Calupoh',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Movimiento_Calupoh.jpg/220px-Movimiento_Calupoh.jpg'
  },
  {
    value: 'Campeiro Bulldog',
    label: 'Campeiro Bulldog',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Buldogue_Campeiro.jpg/220px-Buldogue_Campeiro.jpg'
  },
  {
    value: 'Can de Chira',
    label: 'Can de Chira',
    origin: 'Aragon (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Can_de_Chira_antiguo2.jpg/220px-Can_de_Chira_antiguo2.jpg'
  },
  {
    value: 'Can de Palleiro',
    label: 'Can de Palleiro',
    origin: 'Galicia, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Palleiro1.JPG/220px-Palleiro1.JPG'
  },
  {
    value: 'Canaan Dog',
    label: 'Canaan Dog',
    origin: 'Middle East',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/CanaanDogChakede.jpg/220px-CanaanDogChakede.jpg'
  },
  {
    value: 'Canadian Eskimo Dog',
    label: 'Canadian Eskimo Dog',
    origin: 'Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spoonsced.jpg/220px-Spoonsced.jpg'
  },
  {
    value: 'Cane Corso',
    label: 'Cane Corso',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/CaneCorso_%2823%29.jpg/220px-CaneCorso_%2823%29.jpg'
  },
  {
    value: 'Cane di Oropa',
    label: 'Cane di Oropa',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Cane Paratore',
    label: 'Cane Paratore',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_Paratore.jpg/220px-Cane_Paratore.jpg'
  },
  {
    value: 'Cantabrian Water Dog',
    label: 'Cantabrian Water Dog',
    origin: 'Cantabria, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg/220px-Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg'
  },
  {
    value: 'Cão da Serra de Aires',
    label: 'Cão da Serra de Aires',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cao_de_Serra_de_Aires600.jpg/220px-Cao_de_Serra_de_Aires600.jpg'
  },
  {
    value: 'Cão de Castro Laboreiro',
    label: 'Cão de Castro Laboreiro',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cao_de_Castro_Laboreiro_Ruede.jpg/220px-Cao_de_Castro_Laboreiro_Ruede.jpg'
  },
  {
    value: 'Cão de Gado Transmontano',
    label: 'Cão de Gado Transmontano',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/TRANSMONTANO.jpg/220px-TRANSMONTANO.jpg'
  },
  {
    value: 'Cão Fila de São Miguel',
    label: 'Cão Fila de São Miguel',
    origin: 'São Miguel Island, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg/220px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg'
  },
  {
    value: 'Cardigan Welsh Corgi',
    label: 'Cardigan Welsh Corgi',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cardigan_Welsh_Corgi%2C_Profile.png/220px-Cardigan_Welsh_Corgi%2C_Profile.png'
  },
  {
    value: 'Carea Leonés',
    label: 'Carea Leonés',
    origin: 'León (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Carea_Leon%C3%A9s1_cropped.jpg/220px-Carea_Leon%C3%A9s1_cropped.jpg'
  },
  {
    value: 'Carolina Dog',
    label: 'Carolina Dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dakota%2C_the_Dixie_Dingo_%28or_Carolina_Dog%29.jpg/220px-Dakota%2C_the_Dixie_Dingo_%28or_Carolina_Dog%29.jpg'
  },
  {
    value: 'Carpathian Shepherd Dog',
    label: 'Carpathian Shepherd Dog',
    origin: 'Romania',
    img: 'Not available'
  },
  {
    value: 'Catahoula Leopard Dog',
    label: 'Catahoula Leopard Dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/02._Coahoma_Arkansas_Logan.jpg/220px-02._Coahoma_Arkansas_Logan.jpg'
  },
  {
    value: 'Catalan Sheepdog',
    label: 'Catalan Sheepdog',
    origin: 'Catalonia (Spain)Andorra',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gos-d%27Atura-Catala.jpg/220px-Gos-d%27Atura-Catala.jpg'
  },
  {
    value: 'Caucasian Shepherd Dog',
    label: 'Caucasian Shepherd Dog',
    origin: 'Caucasus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Owczarek_kaukaski_65556.jpg/220px-Owczarek_kaukaski_65556.jpg'
  },
  {
    value: 'Cavalier King Charles Spaniel',
    label: 'Cavalier King Charles Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CarterBIS.Tiki.13.6.09.jpg/220px-CarterBIS.Tiki.13.6.09.jpg'
  },
  {
    value: 'Central Asian Shepherd Dog',
    label: 'Central Asian Shepherd Dog',
    origin: 'Central Asia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/220px-2.CAO_in_Hungary.jpg'
  },
  {
    value: 'Cesky Fousek',
    label: 'Cesky Fousek',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Czeski_fousek_777.jpg/220px-Czeski_fousek_777.jpg'
  },
  {
    value: 'Cesky Terrier',
    label: 'Cesky Terrier',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Terier_czeski_suka_2009_pl2.jpg/220px-Terier_czeski_suka_2009_pl2.jpg'
  },
  {
    value: 'Chesapeake Bay Retriever',
    label: 'Chesapeake Bay Retriever',
    origin: 'United States of America',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/CH_Chesapeake.jpg/220px-CH_Chesapeake.jpg'
  },
  {
    value: 'Chien Français Blanc et Noir',
    label: 'Chien Français Blanc et Noir',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fran%C3%A7ais_noir_et_blanc.JPG/220px-Fran%C3%A7ais_noir_et_blanc.JPG'
  },
  {
    value: 'Chien Français Blanc et Orange',
    label: 'Chien Français Blanc et Orange',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Grand_Anglo-Fran%C3%A7ais_Blanc_Et_Orange.jpg/220px-Grand_Anglo-Fran%C3%A7ais_Blanc_Et_Orange.jpg'
  },
  {
    value: 'Chien Français Tricolore',
    label: 'Chien Français Tricolore',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Frenchhoundtricolore.jpg/220px-Frenchhoundtricolore.jpg'
  },
  {
    value: 'Chihuahua',
    label: 'Chihuahua',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chihuahua1_bvdb.jpg/220px-Chihuahua1_bvdb.jpg'
  },
  {
    value: 'Chilean Terrier',
    label: 'Chilean Terrier',
    origin: 'Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Fox_terrier_chileno.JPG/220px-Fox_terrier_chileno.JPG'
  },
  {
    value: 'Chinese Crested Dog',
    label: 'Chinese Crested Dog',
    origin: 'Africa ',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/IndyStands.jpg/220px-IndyStands.jpg'
  },
  {
    value: 'Chinook',
    label: 'Chinook',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mountan_Laurel_Ajax_the_Chinook_dog.jpg/220px-Mountan_Laurel_Ajax_the_Chinook_dog.jpg'
  },
  {
    value: 'Chippiparai',
    label: 'Chippiparai',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/A_male_chippiparai.jpg/220px-A_male_chippiparai.jpg'
  },
  {
    value: 'Chongqing dog',
    label: 'Chongqing dog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chinese_Chongqing_Dog_H%C3%BCndin.jpg/220px-Chinese_Chongqing_Dog_H%C3%BCndin.jpg'
  },
  {
    value: 'Chortai',
    label: 'Chortai',
    origin: 'Ukraine',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hortaya_Borzaya.jpg/220px-Hortaya_Borzaya.jpg'
  },
  {
    value: 'Chow Chow',
    label: 'Chow Chow',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ChowChow2Szczecin.jpg/220px-ChowChow2Szczecin.jpg'
  },
  {
    value: 'Chukotka sled dog',
    label: 'Chukotka sled dog',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lorino_7_2013-08-04.jpg/220px-Lorino_7_2013-08-04.jpg'
  },
  {
    value: 'Cimarrón Uruguayo',
    label: 'Cimarrón Uruguayo',
    origin: 'Uruguay',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cimarron_uruguayo.png/220px-Cimarron_uruguayo.png'
  },
  {
    value: "Cirneco dell'Etna",
    label: "Cirneco dell'Etna",
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cirneco_dell_Etna_611.jpg/220px-Cirneco_dell_Etna_611.jpg'
  },
  {
    value: 'Clumber Spaniel',
    label: 'Clumber Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Clumber_spaniel_rybnik_kamien_pppl.jpg/220px-Clumber_spaniel_rybnik_kamien_pppl.jpg'
  },
  {
    value: 'Colombian fino hound',
    label: 'Colombian fino hound',
    origin: 'Colombia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Colombian_Fino_Hound.jpg/220px-Colombian_Fino_Hound.jpg'
  },
  {
    value: 'Continental bulldog',
    label: 'Continental bulldog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pitsch-Dog.jpg/220px-Pitsch-Dog.jpg'
  },
  {
    value: 'Coton de Tulear',
    label: 'Coton de Tulear',
    origin: 'Madagascar',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coton_de_Tular_1.jpg/220px-Coton_de_Tular_1.jpg'
  },
  {
    value: 'Cretan Hound',
    label: 'Cretan Hound',
    origin: 'Greece (Crete)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kritikosichnilatis_1.jpg/220px-Kritikosichnilatis_1.jpg'
  },
  {
    value: 'Croatian Sheepdog',
    label: 'Croatian Sheepdog',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/GeraHojda09112055ZG.jpeg/220px-GeraHojda09112055ZG.jpeg'
  },
  {
    value: 'Curly-Coated Retriever',
    label: 'Curly-Coated Retriever',
    origin: 'United Kingdom - England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Curly_Coated_Retriever.jpg/220px-Curly_Coated_Retriever.jpg'
  },
  {
    value: 'Cursinu',
    label: 'Cursinu',
    origin: 'Corsica (France)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cursinu_1.jpg/220px-Cursinu_1.jpg'
  },
  {
    value: 'Czechoslovakian Wolfdog',
    label: 'Czechoslovakian Wolfdog',
    origin: 'Czechoslovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TWH-jolly.JPG/220px-TWH-jolly.JPG'
  },
  {
    value: 'Dachshund',
    label: 'Dachshund',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Short-haired-Dachshund.jpg/220px-Short-haired-Dachshund.jpg'
  },
  {
    value: 'Dalmatian',
    label: 'Dalmatian',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dalmatiner_2.jpg/220px-Dalmatiner_2.jpg'
  },
  {
    value: 'Dandie Dinmont Terrier',
    label: 'Dandie Dinmont Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dandie_Dinmont_Terrier_600.jpg/220px-Dandie_Dinmont_Terrier_600.jpg'
  },
  {
    value: 'Danish Spitz',
    label: 'Danish Spitz',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dansk-spids.jpg/220px-Dansk-spids.jpg'
  },
  {
    value: 'Danish-Swedish Farmdog',
    label: 'Danish-Swedish Farmdog',
    origin: 'Denmark and Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Danish_Farm_Dog1604fxcr_wb.jpg/220px-Danish_Farm_Dog1604fxcr_wb.jpg'
  },
  {
    value: 'Denmark Feist',
    label: 'Denmark Feist',
    origin: 'United States',
    img: 'Not available'
  },
  {
    value: 'Dingo',
    label: 'Dingo',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Dobermann',
    label: 'Dobermann',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/220px-Dobermann_handling.jpg'
  },
  {
    value: 'Dogo Argentino',
    label: 'Dogo Argentino',
    origin: 'Argentina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/0Dogo-argentino-22122251920.jpg/220px-0Dogo-argentino-22122251920.jpg'
  },
  {
    value: 'Dogo Guatemalteco',
    label: 'Dogo Guatemalteco',
    origin: 'Guatemala',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Eggon_Lasal.jpg/220px-Eggon_Lasal.jpg'
  },
  {
    value: 'Dogo Sardesco',
    label: 'Dogo Sardesco',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Dogue Brasileiro',
    label: 'Dogue Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Doguebrasileiro.jpg/220px-Doguebrasileiro.jpg'
  },
  {
    value: 'Dogue de Bordeaux',
    label: 'Dogue de Bordeaux',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/French_Mastiff_female_4.jpg/220px-French_Mastiff_female_4.jpg'
  },
  {
    value: 'Donggyeongi',
    label: 'Donggyeongi',
    origin: 'Gyeongju, South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Donggyeongi.jpg/220px-Donggyeongi.jpg'
  },
  {
    value: 'Drentse Patrijshond',
    label: 'Drentse Patrijshond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Drentse_Patrijshond.jpg/220px-Drentse_Patrijshond.jpg'
  },
  {
    value: 'Drever',
    label: 'Drever',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Drever_NUCh_Tanjo.jpg/220px-Drever_NUCh_Tanjo.jpg'
  },
  {
    value: 'Dunker',
    label: 'Dunker',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dunker.jpg/220px-Dunker.jpg'
  },
  {
    value: 'Dutch Shepherd',
    label: 'Dutch Shepherd',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Short-haired_Dutch_Shepherd%C2%A9CaroleField.jpg/220px-Short-haired_Dutch_Shepherd%C2%A9CaroleField.jpg'
  },
  {
    value: 'Dutch Smoushond',
    label: 'Dutch Smoushond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hollandse_Smoushond_Amsterdam_cropped.jpg/220px-Hollandse_Smoushond_Amsterdam_cropped.jpg'
  },
  {
    value: 'East Siberian Laika',
    label: 'East Siberian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/East_Siberian_Laika.jpg/220px-East_Siberian_Laika.jpg'
  },
  {
    value: 'East European Shepherd',
    label: 'East European Shepherd',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vostochno_Evropeiskaya_Ovcharka.jpg/220px-Vostochno_Evropeiskaya_Ovcharka.jpg'
  },
  {
    value: 'Ecuadorian Hairless Dog',
    label: 'Ecuadorian Hairless Dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'English Foxhound',
    label: 'English Foxhound',
    origin: 'Great Britain - England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/English_Foxhound_portrait.jpg/220px-English_Foxhound_portrait.jpg'
  },
  {
    value: 'English Mastiff',
    label: 'English Mastiff',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Westgort_Anticipation_17_months.JPG/220px-Westgort_Anticipation_17_months.JPG'
  },
  {
    value: 'English Setter',
    label: 'English Setter',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/EnglishSetter9_fx_wb.jpg/220px-EnglishSetter9_fx_wb.jpg'
  },
  {
    value: 'English Shepherd',
    label: 'English Shepherd',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/TricolorEnglishShepherdDog.jpg/220px-TricolorEnglishShepherdDog.jpg'
  },
  {
    value: 'English Springer Spaniel',
    label: 'English Springer Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/English_Springer_Spaniel_in_Tallinn.JPG/220px-English_Springer_Spaniel_in_Tallinn.JPG'
  },
  {
    value: 'English Toy Terrier (Black & Tan)',
    label: 'English Toy Terrier (Black & Tan)',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/English_Toy_Terrier_600_01.jpg/220px-English_Toy_Terrier_600_01.jpg'
  },
  {
    value: 'Entlebucher Mountain Dog',
    label: 'Entlebucher Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Elio_v_Schaerlig_im_Juni_2007_klein.jpg/220px-Elio_v_Schaerlig_im_Juni_2007_klein.jpg'
  },
  {
    value: 'Estonian Hound',
    label: 'Estonian Hound',
    origin: 'Estonia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Go%C5%84czy_esto%C5%84ski_MB_01.jpg/220px-Go%C5%84czy_esto%C5%84ski_MB_01.jpg'
  },
  {
    value: 'Estrela Mountain Dog',
    label: 'Estrela Mountain Dog',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Estrela_Mountain_Dog_6_month_old_male.jpg/220px-Estrela_Mountain_Dog_6_month_old_male.jpg'
  },
  {
    value: 'Eurasier',
    label: 'Eurasier',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Eurasier_BailyWtatze.jpg/220px-Eurasier_BailyWtatze.jpg'
  },
  {
    value: 'Field Spaniel',
    label: 'Field Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Field_spaniel_581.jpg/220px-Field_spaniel_581.jpg'
  },
  {
    value: 'Fila Brasileiro',
    label: 'Fila Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fila_brasileiro_ppk9.jpg/220px-Fila_brasileiro_ppk9.jpg'
  },
  {
    value: 'Finnish Hound',
    label: 'Finnish Hound',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Finnish_Hound.jpg/220px-Finnish_Hound.jpg'
  },
  {
    value: 'Finnish Lapphund',
    label: 'Finnish Lapphund',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Finnish_Lapphund_Glenchess_Revontuli.jpg/220px-Finnish_Lapphund_Glenchess_Revontuli.jpg'
  },
  {
    value: 'Finnish Spitz',
    label: 'Finnish Spitz',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Finnish_Spitz_600.jpg/220px-Finnish_Spitz_600.jpg'
  },
  {
    value: 'Flat-Coated Retriever',
    label: 'Flat-Coated Retriever',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flat_Coated_Retriever_-_black.jpg/220px-Flat_Coated_Retriever_-_black.jpg'
  },
  {
    value: 'French Bulldog',
    label: 'French Bulldog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2008-07-28_Dog_at_Frolick_Field.jpg/220px-2008-07-28_Dog_at_Frolick_Field.jpg'
  },
  {
    value: 'French Spaniel',
    label: 'French Spaniel',
    origin: 'France and Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/04031137_Epagneul_Francais.jpg/220px-04031137_Epagneul_Francais.jpg'
  },
  {
    value: 'Galgo Español',
    label: 'Galgo Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Galgo-Espanol.jpg/220px-Galgo-Espanol.jpg'
  },
  {
    value: 'Garafian Shepherd',
    label: 'Garafian Shepherd',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ch-Rasti.jpg/250px-Ch-Rasti.jpg'
  },
  {
    value: 'Gascon Saintongeois',
    label: 'Gascon Saintongeois',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Virelade_from_1915.JPG/220px-Virelade_from_1915.JPG'
  },
  {
    value: 'Georgian Shepherd',
    label: 'Georgian Shepherd',
    origin: 'Georgia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Georgia_Shepherd.jpg/220px-Georgia_Shepherd.jpg'
  },
  {
    value: 'German Hound',
    label: 'German Hound',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/German_Hound_from_1915.JPG/220px-German_Hound_from_1915.JPG'
  },
  {
    value: 'German Longhaired Pointer',
    label: 'German Longhaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/DeutschLanghaarneu.jpg/220px-DeutschLanghaarneu.jpg'
  },
  {
    value: 'German Pinscher',
    label: 'German Pinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bvdb-duitse_pincher.jpg/220px-Bvdb-duitse_pincher.jpg'
  },
  {
    value: 'German Roughhaired Pointer',
    label: 'German Roughhaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/03030288_Deutsch_Stichelhaa.jpg/220px-03030288_Deutsch_Stichelhaa.jpg'
  },
  {
    value: 'German Shepherd',
    label: 'German Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'German Shorthaired Pointer',
    label: 'German Shorthaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Duitse_staande_korthaar_10-10-2.jpg/220px-Duitse_staande_korthaar_10-10-2.jpg'
  },
  {
    value: 'German Spaniel',
    label: 'German Spaniel',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Plochacz_niemiecki_2_pl.jpg/220px-Plochacz_niemiecki_2_pl.jpg'
  },
  {
    value: 'German Spitz',
    label: 'German Spitz',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pomeranian_orange-sable_Coco.jpg/220px-Pomeranian_orange-sable_Coco.jpg'
  },
  {
    value: 'German Wirehaired Pointer',
    label: 'German Wirehaired Pointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GermanWirehrPtr1_wb.jpg/220px-GermanWirehrPtr1_wb.jpg'
  },
  {
    value: 'Giant Schnauzer',
    label: 'Giant Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/GiantSchnauzer.jpg/220px-GiantSchnauzer.jpg'
  },
  {
    value: 'Glen of Imaal Terrier',
    label: 'Glen of Imaal Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Wheaten_glen_of_imaal.jpg/220px-Wheaten_glen_of_imaal.jpg'
  },
  {
    value: 'Golden Retriever',
    label: 'Golden Retriever',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/220px-Golden_Retriever_Dukedestiny01_drvd.jpg'
  },
  {
    value: 'Gończy Polski',
    label: 'Gończy Polski',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/PolishScenthound-%22NUTKA_Klusujaca_Sfora_wl_A.Balcerzak.jpg/220px-PolishScenthound-%22NUTKA_Klusujaca_Sfora_wl_A.Balcerzak.jpg'
  },
  {
    value: 'Gordon Setter',
    label: 'Gordon Setter',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Orrvilas_enska_w800px.jpg/220px-Orrvilas_enska_w800px.jpg'
  },
  {
    value: 'Grand Anglo-Français Blanc et Noir',
    label: 'Grand Anglo-Français Blanc et Noir',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grand_anglo_francais_noir.jpg/220px-Grand_anglo_francais_noir.jpg'
  },
  {
    value: 'Grand Anglo-Français Blanc et Orange',
    label: 'Grand Anglo-Français Blanc et Orange',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/06101298_Grand_anglo_francais_orange.jpg/220px-06101298_Grand_anglo_francais_orange.jpg'
  },
  {
    value: 'Grand Anglo-Français Tricolore',
    label: 'Grand Anglo-Français Tricolore',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Grand_anglo_francais_tricol.jpg/220px-Grand_anglo_francais_tricol.jpg'
  },
  {
    value: 'Grand Basset Griffon Vendéen',
    label: 'Grand Basset Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/GrandBassettGriffonVend%C3%A9en.jpg/220px-GrandBassettGriffonVend%C3%A9en.jpg'
  },
  {
    value: 'Grand Bleu de Gascogne',
    label: 'Grand Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Grand_Bleu_de_Gascogne_in_a_blue_dogcollar.jpg/220px-Grand_Bleu_de_Gascogne_in_a_blue_dogcollar.jpg'
  },
  {
    value: 'Grand Griffon Vendéen',
    label: 'Grand Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Grand_griffon_vend%C3%A9en_aka_Large_Vend%C3%A9en_Griffon.JPG/220px-Grand_griffon_vend%C3%A9en_aka_Large_Vend%C3%A9en_Griffon.JPG'
  },
  {
    value: 'Great Dane',
    label: 'Great Dane',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dog_niemiecki_%C5%BC%C3%B3%C5%82ty_LM980.jpg/220px-Dog_niemiecki_%C5%BC%C3%B3%C5%82ty_LM980.jpg'
  },
  {
    value: 'Greater Swiss Mountain Dog',
    label: 'Greater Swiss Mountain Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Greater_Swiss_Mountain_Dog_2018.jpg/220px-Greater_Swiss_Mountain_Dog_2018.jpg'
  },
  {
    value: 'Greek Harehound',
    label: 'Greek Harehound',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hellenic_Hound_aka_Hellinikos_Ichnilatis.jpg/220px-Hellenic_Hound_aka_Hellinikos_Ichnilatis.jpg'
  },
  {
    value: 'Greek Shepherd',
    label: 'Greek Shepherd',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Greek_shepherd_male.jpg/220px-Greek_shepherd_male.jpg'
  },
  {
    value: 'Greenland Dog',
    label: 'Greenland Dog',
    origin: 'Greenland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Greenland_Dog.jpg/220px-Greenland_Dog.jpg'
  },
  {
    value: 'Greyhound',
    label: 'Greyhound',
    origin: '(Widespread)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GraceTheGreyhound.jpg/220px-GraceTheGreyhound.jpg'
  },
  {
    value: 'Griffon Bleu de Gascogne',
    label: 'Griffon Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/04031124_Griffon_Bleu_de_Gascogne.jpg/220px-04031124_Griffon_Bleu_de_Gascogne.jpg'
  },
  {
    value: 'Griffon Fauve de Bretagne',
    label: 'Griffon Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/08115500_Griffon_Fauve_Bretagne.jpg/220px-08115500_Griffon_Fauve_Bretagne.jpg'
  },
  {
    value: 'Griffon Nivernais',
    label: 'Griffon Nivernais',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Griffon_nivernais.jpg/220px-Griffon_nivernais.jpg'
  },
  {
    value: 'Gull Dong',
    label: 'Gull Dong',
    origin: 'PakistanIndia',
    img: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Gull_Dong_in_rural_Pakistan_.jpg'
  },
  {
    value: 'Gull Terrier',
    label: 'Gull Terrier',
    origin: 'IndiaPakistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Gull_Terr.png/220px-Gull_Terr.png'
  },
  {
    value: 'Hällefors Elkhound',
    label: 'Hällefors Elkhound',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hades_Mosshult_H%C3%A4lleforsare.jpg/220px-Hades_Mosshult_H%C3%A4lleforsare.jpg'
  },
  {
    value: 'Halden Hound',
    label: 'Halden Hound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Haldenstovare.jpg/220px-Haldenstovare.jpg'
  },
  {
    value: 'Hamiltonstövare',
    label: 'Hamiltonstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hamiltonstovare_600.jpg/220px-Hamiltonstovare_600.jpg'
  },
  {
    value: 'Hanover Hound',
    label: 'Hanover Hound',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hannoverscher_Schweisshund.jpg/220px-Hannoverscher_Schweisshund.jpg'
  },
  {
    value: 'Harrier',
    label: 'Harrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harrier_tricolour.jpg/220px-Harrier_tricolour.jpg'
  },
  {
    value: 'Havanese',
    label: 'Havanese',
    origin: 'Cuba (AKC)/Western Mediterranean Region (FCI)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_Havanese_judging.jpg/220px-A_Havanese_judging.jpg'
  },
  {
    value: 'Himalayan Sheepdog',
    label: 'Himalayan Sheepdog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/2._Himalayan_sheep_dog.jpg/220px-2._Himalayan_sheep_dog.jpg'
  },
  {
    value: 'Hierran Wolfdog',
    label: 'Hierran Wolfdog',
    origin: 'El Hierro, Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kinha.jpg/220px-Kinha.jpg'
  },
  {
    value: 'Hmong bobtail dog',
    label: 'Hmong bobtail dog',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hmong_Bobtail_1.jpg/220px-Hmong_Bobtail_1.jpg'
  },
  {
    value: 'Hokkaido',
    label: 'Hokkaido',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hokkaidou_inu.jpg/220px-Hokkaidou_inu.jpg'
  },
  {
    value: 'Hovawart',
    label: 'Hovawart',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Helos_11.jpg/220px-Helos_11.jpg'
  },
  {
    value: 'Huntaway',
    label: 'Huntaway',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Huntaway.JPG/220px-Huntaway.JPG'
  },
  {
    value: 'Hygen Hound',
    label: 'Hygen Hound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Norwegian_Hygenhound.jpg/220px-Norwegian_Hygenhound.jpg'
  },
  {
    value: 'Ibizan Hound',
    label: 'Ibizan Hound',
    origin: 'Ibiza, (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Podenco_z_ibizy_645.jpg/240px-Podenco_z_ibizy_645.jpg'
  },
  {
    value: 'Icelandic Sheepdog',
    label: 'Icelandic Sheepdog',
    origin: 'Iceland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Icelandic_Sheepdog_Alisa_von_Lehenberg.jpg/220px-Icelandic_Sheepdog_Alisa_von_Lehenberg.jpg'
  },
  {
    value: 'Indian pariah dog',
    label: 'Indian pariah dog',
    origin: 'Indian subcontinent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/The_Indian_Pariah_Dog.jpg/220px-The_Indian_Pariah_Dog.jpg'
  },
  {
    value: 'Indian Spitz',
    label: 'Indian Spitz',
    origin: 'India',
    img: 'Not available'
  },
  {
    value: 'Irish Red and White Setter',
    label: 'Irish Red and White Setter',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Irish_Red_And_White_Setter_2005.jpg/220px-Irish_Red_And_White_Setter_2005.jpg'
  },
  {
    value: 'Irish Setter',
    label: 'Irish Setter',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Can_Setter_dog_GFDL.jpg/220px-Can_Setter_dog_GFDL.jpg'
  },
  {
    value: 'Irish Terrier',
    label: 'Irish Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/IrishTerrierSydenhamHillWoods.jpg/220px-IrishTerrierSydenhamHillWoods.jpg'
  },
  {
    value: 'Irish Water Spaniel',
    label: 'Irish Water Spaniel',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Irlandzki_spaniel_wodny_676.jpg/220px-Irlandzki_spaniel_wodny_676.jpg'
  },
  {
    value: 'Irish Wolfhound',
    label: 'Irish Wolfhound',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%282%29_Irish_Wolfhound_4.jpg/220px-%282%29_Irish_Wolfhound_4.jpg'
  },
  {
    value: 'Istrian Coarse-haired Hound',
    label: 'Istrian Coarse-haired Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Istrian_hound2.jpg/220px-Istrian_hound2.jpg'
  },
  {
    value: 'Istrian Shorthaired Hound',
    label: 'Istrian Shorthaired Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Istrische_Bracke.jpg/220px-Istrische_Bracke.jpg'
  },
  {
    value: 'Italian Greyhound',
    label: 'Italian Greyhound',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Italian_Greyhound_standing_gray_%28cropped%29.jpg/220px-Italian_Greyhound_standing_gray_%28cropped%29.jpg'
  },
  {
    value: 'Jack Russell Terrier',
    label: 'Jack Russell Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Jack_Russell_Terrier_1.jpg/220px-Jack_Russell_Terrier_1.jpg'
  },
  {
    value: 'Jagdterrier',
    label: 'Jagdterrier',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Jagdterrier_bulgaria.jpg/220px-Jagdterrier_bulgaria.jpg'
  },
  {
    value: 'Jämthund',
    label: 'Jämthund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Swedish_Elkhound.jpg/220px-Swedish_Elkhound.jpg'
  },
  {
    value: 'Japanese Chin',
    label: 'Japanese Chin',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chin_posing.jpg/220px-Chin_posing.jpg'
  },
  {
    value: 'Japanese Spitz',
    label: 'Japanese Spitz',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/BIR_Grupp_5-_JAPANSK_SPETS%2C_Chezzay%E2%80%99s_Nice_N%E2%80%99Easy_%2823938629860%29.jpg/220px-BIR_Grupp_5-_JAPANSK_SPETS%2C_Chezzay%E2%80%99s_Nice_N%E2%80%99Easy_%2823938629860%29.jpg'
  },
  {
    value: 'Japanese Terrier',
    label: 'Japanese Terrier',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Japanese_Terrier_22.04.2012_2pl.jpg/220px-Japanese_Terrier_22.04.2012_2pl.jpg'
  },
  {
    value: 'Jindo',
    label: 'Jindo',
    origin: 'Jindo Island, South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ARIRANG.jpg/220px-ARIRANG.jpg'
  },
  {
    value: 'Jonangi',
    label: 'Jonangi',
    origin: 'South India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jonangi_Pup_Shakthi.jpg/220px-Jonangi_Pup_Shakthi.jpg'
  },
  {
    value: 'Kai Ken',
    label: 'Kai Ken',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kai-front.jpg/220px-Kai-front.jpg'
  },
  {
    value: 'Kaikadi',
    label: 'Kaikadi',
    origin: 'India',
    img: 'Not available'
  },
  {
    value: 'Kangal Shepherd Dog',
    label: 'Kangal Shepherd Dog',
    origin: 'Turkey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kangal_front_on.jpg/220px-Kangal_front_on.jpg'
  },
  {
    value: 'Kanni',
    label: 'Kanni',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kanni.jpg/220px-Kanni.jpg'
  },
  {
    value: 'Karakachan dog',
    label: 'Karakachan dog',
    origin: 'Bulgaria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Karakatschan.jpg/220px-Karakatschan.jpg'
  },
  {
    value: 'Karelian Bear Dog',
    label: 'Karelian Bear Dog',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Karelski_pies_na_nied%C5%BAwiedzie_sylwetka.JPG/220px-Karelski_pies_na_nied%C5%BAwiedzie_sylwetka.JPG'
  },
  {
    value: 'Kars',
    label: 'Kars',
    origin: 'Turkey',
    img: 'Not available'
  },
  {
    value: 'Karst Shepherd',
    label: 'Karst Shepherd',
    origin: 'Slovenia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Owczarek_kraski_654.jpg/220px-Owczarek_kraski_654.jpg'
  },
  {
    value: 'Keeshond',
    label: 'Keeshond',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keeshond_Majic_standing_cropped.jpg/220px-Keeshond_Majic_standing_cropped.jpg'
  },
  {
    value: 'Kerry Beagle',
    label: 'Kerry Beagle',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kerry_Beagle_from_1915.JPG/220px-Kerry_Beagle_from_1915.JPG'
  },
  {
    value: 'Kerry Blue Terrier',
    label: 'Kerry Blue Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Kerry_Blue_Terrier.jpg/220px-Kerry_Blue_Terrier.jpg'
  },
  {
    value: 'King Charles Spaniel',
    label: 'King Charles Spaniel',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/King_Charles_Spaniel_200.jpg/220px-King_Charles_Spaniel_200.jpg'
  },
  {
    value: 'King Shepherd',
    label: 'King Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'Kintamani',
    label: 'Kintamani',
    origin: 'Indonesia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kintamani.jpg/220px-Kintamani.jpg'
  },
  {
    value: 'Kishu',
    label: 'Kishu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kishu.jpg/220px-Kishu.jpg'
  },
  {
    value: 'Kokoni',
    label: 'Kokoni',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg/220px-KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg'
  },
  {
    value: 'Kombai',
    label: 'Kombai',
    origin: 'Tamil Nadu India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kombai_dog.jpg/220px-Kombai_dog.jpg'
  },
  {
    value: 'Komondor',
    label: 'Komondor',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Komondor_delvin.jpg/220px-Komondor_delvin.jpg'
  },
  {
    value: 'Kooikerhondje',
    label: 'Kooikerhondje',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kooiker03.jpg/220px-Kooiker03.jpg'
  },
  {
    value: 'Koolie',
    label: 'Koolie',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pete_may01_web.JPG/220px-Pete_may01_web.JPG'
  },
  {
    value: 'Koyun dog',
    label: 'Koyun dog',
    origin: 'Turkey',
    img: 'Not available'
  },
  {
    value: 'Kromfohrländer',
    label: 'Kromfohrländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kromfohrl%C3%A4nder_in_Germany.jpg/220px-Kromfohrl%C3%A4nder_in_Germany.jpg'
  },
  {
    value: 'Kuchi',
    label: 'Kuchi',
    origin: 'Afghanistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Afghan_Shepherd.jpg/220px-Afghan_Shepherd.jpg'
  },
  {
    value: 'Kunming dog',
    label: 'Kunming dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Kurdish Mastiff',
    label: 'Kurdish Mastiff',
    origin: 'Iraq',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Pshdar_Dog-Kurdish_Dog-Kurd_Mastiff.jpg/220px-Pshdar_Dog-Kurdish_Dog-Kurd_Mastiff.jpg'
  },
  {
    value: 'Beagle',
    label: 'Beagle',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Beagle_600.jpg/220px-Beagle_600.jpg'
  },
  {
    value: 'Kuvasz',
    label: 'Kuvasz',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kuvasz_named_Kan.jpg/220px-Kuvasz_named_Kan.jpg'
  },
  {
    value: 'Lagotto Romagnolo',
    label: 'Lagotto Romagnolo',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lagotto_Romagnolo.jpg/220px-Lagotto_Romagnolo.jpg'
  },
  {
    value: 'Lakeland Terrier',
    label: 'Lakeland Terrier',
    origin: 'United Kingdom (England)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lakeland_Terrier.jpg/220px-Lakeland_Terrier.jpg'
  },
  {
    value: 'Lancashire Heeler',
    label: 'Lancashire Heeler',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lancashire_Heeler_600.jpg/220px-Lancashire_Heeler_600.jpg'
  },
  {
    value: 'Landseer',
    label: 'Landseer',
    origin: 'Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Landseer.jpg/220px-Landseer.jpg'
  },
  {
    value: 'Affenpinscher',
    label: 'Affenpinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Affenpinscher.jpg/220px-Affenpinscher.jpg'
  },
  {
    value: 'Large Münsterländer',
    label: 'Large Münsterländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/GrosserMuensterlaender.jpg/220px-GrosserMuensterlaender.jpg'
  },
  {
    value: 'Leonberger',
    label: 'Leonberger',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Leonberger_male.jpg/220px-Leonberger_male.jpg'
  },
  {
    value: 'Levriero Sardo',
    label: 'Levriero Sardo',
    origin: 'Italy',
    img: 'Not available'
  },
  {
    value: 'Lhasa Apso',
    label: 'Lhasa Apso',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aishia.jpg/220px-Aishia.jpg'
  },
  {
    value: 'Liangshan Dog',
    label: 'Liangshan Dog',
    origin: 'China',
    img: 'Not available'
  },
  {
    value: 'Lapponian Herder',
    label: 'Lapponian Herder',
    origin: 'Finland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lapskvallhund.jpg/220px-Lapskvallhund.jpg'
  },
  {
    value: 'Labrador Retriever',
    label: 'Labrador Retriever',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/220px-Labrador_on_Quantock_%282175262184%29.jpg'
  },
  {
    value: 'English Cocker Spaniel',
    label: 'English Cocker Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/%22Bill%22_-_Cocker_spaniel_anglais_2.JPG/220px-%22Bill%22_-_Cocker_spaniel_anglais_2.JPG'
  },
  {
    value: 'Lithuanian Hound',
    label: 'Lithuanian Hound',
    origin: 'Lithuania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sculptures_in_Tel%C5%A1iai.jpg/220px-Sculptures_in_Tel%C5%A1iai.jpg'
  },
  {
    value: 'Lobito Herreño',
    label: 'Lobito Herreño',
    origin: 'El Hierro, Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kinha.jpg/220px-Kinha.jpg'
  },
  {
    value: 'Löwchen',
    label: 'Löwchen',
    origin: 'Europe, possibly France in particular',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Adult_Lowchen_Gaiting.jpg/220px-Adult_Lowchen_Gaiting.jpg'
  },
  {
    value: 'Magyar agár',
    label: 'Magyar agár',
    origin: 'Hungary;Transylvania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Magyar_ag%C3%A1r_male.jpg/220px-Magyar_ag%C3%A1r_male.jpg'
  },
  {
    value: 'Mahratta Greyhound',
    label: 'Mahratta Greyhound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mahratta_Hound.jpg/220px-Mahratta_Hound.jpg'
  },
  {
    value: 'Lupo Italiano',
    label: 'Lupo Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/LUPO_ITALIANO_-_PALIO_DI_CENEDA_2018_12.png/220px-LUPO_ITALIANO_-_PALIO_DI_CENEDA_2018_12.png'
  },
  {
    value: 'Mackenzie River husky',
    label: 'Mackenzie River husky',
    origin: 'Canada, United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/MackenzieRiverHusky.jpg/220px-MackenzieRiverHusky.jpg'
  },
  {
    value: 'Maltese',
    label: 'Maltese',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Maltese_600.jpg/220px-Maltese_600.jpg'
  },
  {
    value: 'Maneto',
    label: 'Maneto',
    origin: 'Andalusia (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Maneto1.jpg/220px-Maneto1.jpg'
  },
  {
    value: 'Manchester Terrier',
    label: 'Manchester Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mancherster_Terrier.jpg/220px-Mancherster_Terrier.jpg'
  },
  {
    value: 'Maremmano-Abruzzese Sheepdog',
    label: 'Maremmano-Abruzzese Sheepdog',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cane_Pastore_Abruzzese_Abruzzo.jpg/220px-Cane_Pastore_Abruzzese_Abruzzo.jpg'
  },
  {
    value: 'McNab dog',
    label: 'McNab dog',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/McNab-Shepherd-dodger.jpg/220px-McNab-Shepherd-dodger.jpg'
  },
  {
    value: 'Miniature American Shepherd',
    label: 'Miniature American Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Blue_Merle_Miniature_American_Shepherd_in_Grass.jpg/220px-Blue_Merle_Miniature_American_Shepherd_in_Grass.jpg'
  },
  {
    value: 'Miniature Bull Terrier',
    label: 'Miniature Bull Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bull_terier_i_bull_terier_miniatura_d46.jpg/220px-Bull_terier_i_bull_terier_miniatura_d46.jpg'
  },
  {
    value: 'Miniature Fox Terrier',
    label: 'Miniature Fox Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Miniature_Fox_Terrier.jpg/220px-Miniature_Fox_Terrier.jpg'
  },
  {
    value: 'Miniature Pinscher',
    label: 'Miniature Pinscher',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Miniature_pinscher.jpg/220px-Miniature_pinscher.jpg'
  },
  {
    value: 'Miniature Schnauzer',
    label: 'Miniature Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%D0%A6%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80_%D0%BE%D0%BA%D1%80%D0%B0%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81_%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%BC.JPG/275px-%D0%A6%D0%B2%D0%B5%D1%80%D0%B3%D1%88%D0%BD%D0%B0%D1%83%D1%86%D0%B5%D1%80_%D0%BE%D0%BA%D1%80%D0%B0%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81_%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE%D0%BC.JPG'
  },
  {
    value: 'Molossus of Epirus',
    label: 'Molossus of Epirus',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Greek_shepherd_male.jpg/220px-Greek_shepherd_male.jpg'
  },
  {
    value: 'Mongrel dog',
    label: 'Mongrel dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Montenegrin Mountain Hound',
    label: 'Montenegrin Mountain Hound',
    origin: 'Montenegro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Montenegrinhound2.jpg/220px-Montenegrinhound2.jpg'
  },
  {
    value: 'Mountain Cur',
    label: 'Mountain Cur',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mtncur.png/220px-Mtncur.png'
  },
  {
    value: 'Mountain Feist',
    label: 'Mountain Feist',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0809bigun.jpg/220px-0809bigun.jpg'
  },
  {
    value: 'Mudhol Hound',
    label: 'Mudhol Hound',
    origin: 'Mudhol, Karnataka, India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caravan_hound_Closeupfire.jpg/220px-Caravan_hound_Closeupfire.jpg'
  },
  {
    value: 'Mudi',
    label: 'Mudi',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Hondenras_Mudi.jpg/220px-Hondenras_Mudi.jpg'
  },
  {
    value: 'Neapolitan Mastiff',
    label: 'Neapolitan Mastiff',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mastino_sylwetka.jpg/220px-Mastino_sylwetka.jpg'
  },
  {
    value: 'Nenets Herding Laika',
    label: 'Nenets Herding Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B0%D0%B9%D0%BA%D0%B0_7.jpg/220px-%D0%9D%D0%B5%D0%BD%D0%B5%D1%86%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B0%D0%B9%D0%BA%D0%B0_7.jpg'
  },
  {
    value: 'New Guinea singing dog',
    label: 'New Guinea singing dog',
    origin: 'New Guinea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/New_Guinea_Singing_Dog_on_trail-Cropped.jpg/220px-New_Guinea_Singing_Dog_on_trail-Cropped.jpg'
  },
  {
    value: 'New Zealand Heading Dog',
    label: 'New Zealand Heading Dog',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Young_New_Zealand_Heading_dog.jpg/220px-Young_New_Zealand_Heading_dog.jpg'
  },
  {
    value: 'Newfoundland',
    label: 'Newfoundland',
    origin: 'Island of Newfoundland, modern-day Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Newfoundland_dog_Smoky.jpg/220px-Newfoundland_dog_Smoky.jpg'
  },
  {
    value: 'Norfolk Terrier',
    label: 'Norfolk Terrier',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Norfolk_terrier_CAC.jpg/220px-Norfolk_terrier_CAC.jpg'
  },
  {
    value: 'Norrbottenspets',
    label: 'Norrbottenspets',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nordic_Spitz.jpg/220px-Nordic_Spitz.jpg'
  },
  {
    value: 'Northern Inuit Dog',
    label: 'Northern Inuit Dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Northern_Inuit_Dog.jpg/240px-Northern_Inuit_Dog.jpg'
  },
  {
    value: 'Norwegian Buhund',
    label: 'Norwegian Buhund',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Norwegian_Buhund_600.jpg/220px-Norwegian_Buhund_600.jpg'
  },
  {
    value: 'Norwegian Elkhound',
    label: 'Norwegian Elkhound',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Norwegian_Elkhound.jpg/220px-Norwegian_Elkhound.jpg'
  },
  {
    value: 'Norwegian Lundehund',
    label: 'Norwegian Lundehund',
    origin: 'Norway',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lundehund-2003.jpg/220px-Lundehund-2003.jpg'
  },
  {
    value: 'Norwich Terrier',
    label: 'Norwich Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Norwichterrier.jpg/220px-Norwichterrier.jpg'
  },
  {
    value: 'Nova Scotia Duck Tolling Retriever',
    label: 'Nova Scotia Duck Tolling Retriever',
    origin: 'Canada (Nova Scotia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Duck_Toller.jpg/220px-Duck_Toller.jpg'
  },
  {
    value: 'Old English Sheepdog',
    label: 'Old English Sheepdog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Old_English_Sheepdog_%28side%29.jpg/220px-Old_English_Sheepdog_%28side%29.jpg'
  },
  {
    value: 'Old Danish Pointer',
    label: 'Old Danish Pointer',
    origin: 'Denmark',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg/220px-Wy%C5%BCe%C5%82_du%C5%84ski_123.jpg'
  },
  {
    value: 'Olde English Bulldogge',
    label: 'Olde English Bulldogge',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/UKC_Olde_English_Bulldogge_Male.jpg/220px-UKC_Olde_English_Bulldogge_Male.jpg'
  },
  {
    value: 'Otterhound',
    label: 'Otterhound',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Two_otterhounds.jpg/220px-Two_otterhounds.jpg'
  },
  {
    value: 'Old English Terrier',
    label: 'Old English Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Old_English_Black_and_Tan_Terrier.jpg/220px-Old_English_Black_and_Tan_Terrier.jpg'
  },
  {
    value: 'Pachon Navarro',
    label: 'Pachon Navarro',
    origin: 'Navarre, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pachon_navarro.jpeg/220px-Pachon_navarro.jpeg'
  },
  {
    value: 'Pampas Deerhound',
    label: 'Pampas Deerhound',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Veadeiro_pampeano.JPG/220px-Veadeiro_pampeano.JPG'
  },
  {
    value: 'Papillon',
    label: 'Papillon',
    origin: 'Belgium / France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/RileyPapillon.JPG/220px-RileyPapillon.JPG'
  },
  {
    value: 'Parson Russell Terrier',
    label: 'Parson Russell Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/05052881_PRT_braun_rau.jpg/220px-05052881_PRT_braun_rau.jpg'
  },
  {
    value: 'Pastore della Lessinia e del Lagorai',
    label: 'Pastore della Lessinia e del Lagorai',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pastore_della_Lessinia_e_del_Lagorai.jpg/220px-Pastore_della_Lessinia_e_del_Lagorai.jpg'
  },
  {
    value: 'Patagonian Sheepdog',
    label: 'Patagonian Sheepdog',
    origin: 'Chile',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ovejero_magall%C3%A1nico_2.jpg/220px-Ovejero_magall%C3%A1nico_2.jpg'
  },
  {
    value: 'Patterdale Terrier',
    label: 'Patterdale Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/05078045_Patterdale_Terrier.jpg/220px-05078045_Patterdale_Terrier.jpg'
  },
  {
    value: 'Pekingese',
    label: 'Pekingese',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/1AKC_Pekingese_Dog_Show_2011.jpg/220px-1AKC_Pekingese_Dog_Show_2011.jpg'
  },
  {
    value: 'Pembroke Welsh Corgi',
    label: 'Pembroke Welsh Corgi',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/220px-Welchcorgipembroke.JPG'
  },
  {
    value: 'Perro Majorero',
    label: 'Perro Majorero',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bardina-Donna-1.jpg/220px-Bardina-Donna-1.jpg'
  },
  {
    value: 'Perro de Pastor Mallorquin',
    label: 'Perro de Pastor Mallorquin',
    origin: 'Majorca (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ca_de_Bestiar.JPG/220px-Ca_de_Bestiar.JPG'
  },
  {
    value: 'Perro de Presa Canario',
    label: 'Perro de Presa Canario',
    origin: 'Canary Islands, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Presacanariobody.jpg/220px-Presacanariobody.jpg'
  },
  {
    value: 'Perro de Presa Mallorquin',
    label: 'Perro de Presa Mallorquin',
    origin: 'Spain (Majorca)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ZarcoBruno2015.jpg/220px-ZarcoBruno2015.jpg'
  },
  {
    value: 'Peruvian Inca Orchid',
    label: 'Peruvian Inca Orchid',
    origin: 'Peru',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/PHDStandardStanding_-_Perro_Sin_Pelo_del_Per%C3%BA.jpg/220px-PHDStandardStanding_-_Perro_Sin_Pelo_del_Per%C3%BA.jpg'
  },
  {
    value: 'Petit Basset Griffon Vendéen',
    label: 'Petit Basset Griffon Vendéen',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P_Basset_Griffon_Vendeen_600.jpg/220px-P_Basset_Griffon_Vendeen_600.jpg'
  },
  {
    value: 'Petit Bleu de Gascogne',
    label: 'Petit Bleu de Gascogne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ma%C5%82y_go%C5%84czy_gasko%C5%84ski_Cita_z_Beckova_Cb5.jpg/220px-Ma%C5%82y_go%C5%84czy_gasko%C5%84ski_Cita_z_Beckova_Cb5.jpg'
  },
  {
    value: 'Phalène',
    label: 'Phalène',
    origin: 'Belgium, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Spaniel_miniaturowy_kontynentalny_phalene_00.jpg/220px-Spaniel_miniaturowy_kontynentalny_phalene_00.jpg'
  },
  {
    value: 'Pharaoh Hound',
    label: 'Pharaoh Hound',
    origin: 'Malta',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pies_faraona_e34.jpg/220px-Pies_faraona_e34.jpg'
  },
  {
    value: 'Phu Quoc Ridgeback',
    label: 'Phu Quoc Ridgeback',
    origin: 'Vietnam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Phu_Quoc_dog.jpg/220px-Phu_Quoc_dog.jpg'
  },
  {
    value: 'Picardy Spaniel',
    label: 'Picardy Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Epagneul_picard_685.jpg/220px-Epagneul_picard_685.jpg'
  },
  {
    value: 'Plummer Terrier',
    label: 'Plummer Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Plummer_Terrier_Nathy.jpg/220px-Plummer_Terrier_Nathy.jpg'
  },
  {
    value: 'Plott Hound',
    label: 'Plott Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Plotthund_Kynnagardens_Ziggy_Lundamo.JPG/220px-Plotthund_Kynnagardens_Ziggy_Lundamo.JPG'
  },
  {
    value: 'Podenco Andaluz',
    label: 'Podenco Andaluz',
    origin: 'Andalusia, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Podenco_chico_resized.jpg/220px-Podenco_chico_resized.jpg'
  },
  {
    value: 'Podenco Canario',
    label: 'Podenco Canario',
    origin: 'Canary Islands (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Podenco_canario_hembra.jpg/260px-Podenco_canario_hembra.jpg'
  },
  {
    value: 'Podenco Valenciano',
    label: 'Podenco Valenciano',
    origin: 'Valencian Community, Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Podencovalencianolisofawn1.jpg/220px-Podencovalencianolisofawn1.jpg'
  },
  {
    value: 'Pointer',
    label: 'Pointer',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/English_Pointer_orange-white.jpg/220px-English_Pointer_orange-white.jpg'
  },
  {
    value: 'Poitevin',
    label: 'Poitevin',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Poitevin_Hound.jpg/220px-Poitevin_Hound.jpg'
  },
  {
    value: 'Polish Greyhound',
    label: 'Polish Greyhound',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Chart_polski_200_LM.jpg/220px-Chart_polski_200_LM.jpg'
  },
  {
    value: 'Polish Hound',
    label: 'Polish Hound',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/PolishHound-MlChPl-OKSANA-ZOstregoBoru-wl.JoannaZembrzuska_3.JPG/220px-PolishHound-MlChPl-OKSANA-ZOstregoBoru-wl.JoannaZembrzuska_3.JPG'
  },
  {
    value: 'Polish Lowland Sheepdog',
    label: 'Polish Lowland Sheepdog',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Polski_owczarek_nizinny_rybnik-kamien_pl.jpg/220px-Polski_owczarek_nizinny_rybnik-kamien_pl.jpg'
  },
  {
    value: 'Polish Tatra Sheepdog',
    label: 'Polish Tatra Sheepdog',
    origin: 'Poland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Podhalaner_Sven_Fischer.jpg/220px-Podhalaner_Sven_Fischer.jpg'
  },
  {
    value: 'Pomeranian',
    label: 'Pomeranian',
    origin: 'Pomerania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pomeranian.JPG/220px-Pomeranian.JPG'
  },
  {
    value: 'Pont-Audemer Spaniel',
    label: 'Pont-Audemer Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/04031158_Epagneul_Pont_Audemer.jpg/220px-04031158_Epagneul_Pont_Audemer.jpg'
  },
  {
    value: 'Poodle',
    label: 'Poodle',
    origin: 'Germany or France (see history)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/220px-Full_attention_%288067543690%29.jpg'
  },
  {
    value: 'Porcelaine',
    label: 'Porcelaine',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Porcelaine_2009_pl4.jpg/220px-Porcelaine_2009_pl4.jpg'
  },
  {
    value: 'Portuguese Podengo',
    label: 'Portuguese Podengo',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Evitarocks.jpg/220px-Evitarocks.jpg'
  },
  {
    value: 'Portuguese Pointer',
    label: 'Portuguese Pointer',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portuguese_pointer_11yo.jpg/220px-Portuguese_pointer_11yo.jpg'
  },
  {
    value: 'Portuguese Water Dog',
    label: 'Portuguese Water Dog',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/C%C3%A3o_de_agua_Portugu%C3%AAs_2.jpg/220px-C%C3%A3o_de_agua_Portugu%C3%AAs_2.jpg'
  },
  {
    value: 'Posavac Hound',
    label: 'Posavac Hound',
    origin: 'Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Posavac_hound_female_%28cropped%29.jpg/220px-Posavac_hound_female_%28cropped%29.jpg'
  },
  {
    value: 'Pražský Krysařík',
    label: 'Pražský Krysařík',
    origin: 'Czech Republic',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Prague_Ratter.jpg/220px-Prague_Ratter.jpg'
  },
  {
    value: 'Pudelpointer',
    label: 'Pudelpointer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pudelpointer_on_point.jpg/220px-Pudelpointer_on_point.jpg'
  },
  {
    value: 'Pug',
    label: 'Pug',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/220px-Mops_oct09_cropped2.jpg'
  },
  {
    value: 'Puli',
    label: 'Puli',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/PuliBlack_wb.jpg/220px-PuliBlack_wb.jpg'
  },
  {
    value: 'Pumi',
    label: 'Pumi',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pumi_2.jpg/220px-Pumi_2.jpg'
  },
  {
    value: 'Pungsan dog',
    label: 'Pungsan dog',
    origin: 'former Phungsan county, Ryanggang-do, North Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Poongsandogs.JPG/220px-Poongsandogs.JPG'
  },
  {
    value: 'Pyrenean Mastiff',
    label: 'Pyrenean Mastiff',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MasPiri-Lula-ESP.jpg/220px-MasPiri-Lula-ESP.jpg'
  },
  {
    value: 'Pyrenean Mountain Dog',
    label: 'Pyrenean Mountain Dog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Great_Pyrenees_Mountain_Dog_2.png/220px-Great_Pyrenees_Mountain_Dog_2.png'
  },
  {
    value: 'Pyrenean Sheepdog',
    label: 'Pyrenean Sheepdog',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Berger-des-Pyrenees_Adeux_0302x0214.jpg/220px-Berger-des-Pyrenees_Adeux_0302x0214.jpg'
  },
  {
    value: 'Rafeiro do Alentejo',
    label: 'Rafeiro do Alentejo',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rafeiro_male.jpg/220px-Rafeiro_male.jpg'
  },
  {
    value: 'Rajapalayam',
    label: 'Rajapalayam',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%282%29_Isha_female_rajapalayam.jpg/220px-%282%29_Isha_female_rajapalayam.jpg'
  },
  {
    value: 'Rampur Greyhound',
    label: 'Rampur Greyhound',
    origin: 'India',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rampurgreyhound.jpg/220px-Rampurgreyhound.jpg'
  },
  {
    value: 'Rat Terrier',
    label: 'Rat Terrier',
    origin: 'United States of America (USA)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/AmRatTerr2_wb.jpg/220px-AmRatTerr2_wb.jpg'
  },
  {
    value: 'Ratonero Bodeguero Andaluz',
    label: 'Ratonero Bodeguero Andaluz',
    origin: 'Andalusia (Spain) Lifespan:8-18 years',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bodeguero_young.jpg/220px-Bodeguero_young.jpg'
  },
  {
    value: 'Ratonero Murciano',
    label: 'Ratonero Murciano',
    origin: 'Region of Murcia, Spain',
    img: 'Not available'
  },
  {
    value: 'Ratonero Valenciano',
    label: 'Ratonero Valenciano',
    origin: 'Valencian Community (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ratonero_valenciano_hell.jpg/250px-Ratonero_valenciano_hell.jpg'
  },
  {
    value: 'Ratonero Mallorquin',
    label: 'Ratonero Mallorquin',
    origin: 'Mallorca (Balearic Islands, Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ca_rater_mallorqu%C3%AD.JPG/220px-Ca_rater_mallorqu%C3%AD.JPG'
  },
  {
    value: 'Rhodesian Ridgeback',
    label: 'Rhodesian Ridgeback',
    origin: 'Rhodesia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rhodesian_ridgeback.jpg/220px-Rhodesian_ridgeback.jpg'
  },
  {
    value: 'Redbone Coonhound',
    label: 'Redbone Coonhound',
    origin: 'Southern United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Redbone-coonhound-detail.jpg/220px-Redbone-coonhound-detail.jpg'
  },
  {
    value: 'Romanian Mioritic Shepherd Dog',
    label: 'Romanian Mioritic Shepherd Dog',
    origin: 'Romania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mioritic.jpg/220px-Mioritic.jpg'
  },
  {
    value: 'Romanian Raven Shepherd Dog',
    label: 'Romanian Raven Shepherd Dog',
    origin: 'Romania',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Romanian-Shepherd-Corb.jpg/220px-Romanian-Shepherd-Corb.jpg'
  },
  {
    value: 'Rottweiler',
    label: 'Rottweiler',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rottweiler_standing_facing_left.jpg/220px-Rottweiler_standing_facing_left.jpg'
  },
  {
    value: 'Rough Collie',
    label: 'Rough Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Rough-Collie-japan08_%28cropped%29.jpg/220px-Rough-Collie-japan08_%28cropped%29.jpg'
  },
  {
    value: 'Russian Spaniel',
    label: 'Russian Spaniel',
    origin: 'Union of Soviet Socialist Republics',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rosyjski_spaniel_my%C5%9Bliwski_MB_01.jpg/220px-Rosyjski_spaniel_my%C5%9Bliwski_MB_01.jpg'
  },
  {
    value: 'Russian Toy',
    label: 'Russian Toy',
    origin: 'Russia http://www.fci.be/Nomenclature/Standards/352g09-en.pdf',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/RusskiyToyWelpe9Mon.JPG/220px-RusskiyToyWelpe9Mon.JPG'
  },
  {
    value: 'Russo-European Laika',
    label: 'Russo-European Laika',
    origin: 'European part of Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Russo_European_Laika_2.jpg/220px-Russo_European_Laika_2.jpg'
  },
  {
    value: 'Ryukyu Inu',
    label: 'Ryukyu Inu',
    origin: 'Okinawa, Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ryukyu_dog_pair.jpg/220px-Ryukyu_dog_pair.jpg'
  },
  {
    value: 'Saarloos Wolfdog',
    label: 'Saarloos Wolfdog',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oishani_Othari_van_Koekie%27s_Ranch.jpg/220px-Oishani_Othari_van_Koekie%27s_Ranch.jpg'
  },
  {
    value: 'Sabueso Español',
    label: 'Sabueso Español',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Angoi_de_A_Fonsagrada.JPG/220px-Angoi_de_A_Fonsagrada.JPG'
  },
  {
    value: 'Saint Bernard',
    label: 'Saint Bernard',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hummel_Vedor_vd_Robandahoeve.jpg/220px-Hummel_Vedor_vd_Robandahoeve.jpg'
  },
  {
    value: 'Saint Hubert Jura Hound',
    label: 'Saint Hubert Jura Hound',
    origin: 'Switzerland',
    img: 'Not available'
  },
  {
    value: 'Saint Miguel Cattle Dog',
    label: 'Saint Miguel Cattle Dog',
    origin: 'São Miguel Island, Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg/220px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_3pl.jpg'
  },
  {
    value: 'Saluki',
    label: 'Saluki',
    origin: 'Fertile Crescent',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Red_Smooth_Saluki.jpg/220px-Red_Smooth_Saluki.jpg'
  },
  {
    value: 'Samoyed',
    label: 'Samoyed',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Samojed00.jpg/220px-Samojed00.jpg'
  },
  {
    value: 'Afghan Hound',
    label: 'Afghan Hound',
    origin: 'Afghanistan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Afghan_dog_-_cropped.jpg/220px-Afghan_dog_-_cropped.jpg'
  },
  {
    value: 'Sapsali',
    label: 'Sapsali',
    origin: 'South Korea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Korea-Jeonju-Sapsal_dog_in_front_of_a_Hanok_Village-01.jpg/220px-Korea-Jeonju-Sapsal_dog_in_front_of_a_Hanok_Village-01.jpg'
  },
  {
    value: 'Sarabi dog',
    label: 'Sarabi dog',
    origin: 'Iran',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Sarabi-dog.jpg/220px-Sarabi-dog.jpg'
  },
  {
    value: 'Sardinian Shepherd Dog',
    label: 'Sardinian Shepherd Dog',
    origin: 'Sardinia (Italy)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sardinian_Shepherd_Dog.jpg/220px-Sardinian_Shepherd_Dog.jpg'
  },
  {
    value: 'Šarplaninac',
    label: 'Šarplaninac',
    origin: 'former YugoslaviaNorth MacedoniaSerbia (Kosovo)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sardog.jpg/220px-Sardog.jpg'
  },
  {
    value: 'Schapendoes',
    label: 'Schapendoes',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nederlandse-schapendoes-02.jpg/220px-Nederlandse-schapendoes-02.jpg'
  },
  {
    value: 'Schillerstövare',
    label: 'Schillerstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Schillerst%C3%B6vare_bearbeitet.jpg/220px-Schillerst%C3%B6vare_bearbeitet.jpg'
  },
  {
    value: 'Schipperke',
    label: 'Schipperke',
    origin: 'Belgium',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schipperke0001.jpg/220px-Schipperke0001.jpg'
  },
  {
    value: 'Schweizer Laufhund',
    label: 'Schweizer Laufhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Swiss_Hound.jpg/220px-Swiss_Hound.jpg'
  },
  {
    value: 'Schweizerischer Niederlaufhund',
    label: 'Schweizerischer Niederlaufhund',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/08115491_Schwyzer_Niederlaufhund.jpg/220px-08115491_Schwyzer_Niederlaufhund.jpg'
  },
  {
    value: 'Scottish Deerhound',
    label: 'Scottish Deerhound',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Deerhound_Fernhill%27s_Kendra.jpg/220px-Deerhound_Fernhill%27s_Kendra.jpg'
  },
  {
    value: 'Scottish Terrier',
    label: 'Scottish Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Scottish_Terrier_Photo_of_Face.jpg/220px-Scottish_Terrier_Photo_of_Face.jpg'
  },
  {
    value: 'Sealyham Terrier',
    label: 'Sealyham Terrier',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Charmin_crufts_2009.jpg/220px-Charmin_crufts_2009.jpg'
  },
  {
    value: "Segugio dell'Appennino",
    label: "Segugio dell'Appennino",
    origin: 'Italy',
    img: 'Not available'
  },
  {
    value: 'Segugio Italiano',
    label: 'Segugio Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Segugioitalianopelorasofulvo_%28cropped%29.JPG/220px-Segugioitalianopelorasofulvo_%28cropped%29.JPG'
  },
  {
    value: 'Segugio Maremmano',
    label: 'Segugio Maremmano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Maremmahound-brindle1.jpg/220px-Maremmahound-brindle1.jpg'
  },
  {
    value: 'Serbian Hound',
    label: 'Serbian Hound',
    origin: 'Serbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Serbian_Hound.JPG/220px-Serbian_Hound.JPG'
  },
  {
    value: 'Serbian Tricolour Hound',
    label: 'Serbian Tricolour Hound',
    origin: 'Serbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Srpski_Trobojni_Gonic.gif/220px-Srpski_Trobojni_Gonic.gif'
  },
  {
    value: 'Serrano Bulldog',
    label: 'Serrano Bulldog',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Anuke.jpg/220px-Anuke.jpg'
  },
  {
    value: 'Shar Pei',
    label: 'Shar Pei',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dragongate_Mong_Jai.jpg/220px-Dragongate_Mong_Jai.jpg'
  },
  {
    value: 'Shetland Sheepdog',
    label: 'Shetland Sheepdog',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shetland_Sheepdog_600.jpg/220px-Shetland_Sheepdog_600.jpg'
  },
  {
    value: 'Shiba Inu',
    label: 'Shiba Inu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Shiba_Inu_%28Chinese_characters%29.svg/70px-Shiba_Inu_%28Chinese_characters%29.svg.png'
  },
  {
    value: 'Shih Tzu',
    label: 'Shih Tzu',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shihtzu_%28cropped%29.jpg/220px-Shihtzu_%28cropped%29.jpg'
  },
  {
    value: 'Shikoku',
    label: 'Shikoku',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Shikokuken.jpg/220px-Shikokuken.jpg'
  },
  {
    value: 'Shiloh Shepherd',
    label: 'Shiloh Shepherd',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/220px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg'
  },
  {
    value: 'Siberian Husky',
    label: 'Siberian Husky',
    origin: 'Siberia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Husky_L.jpg/220px-Husky_L.jpg'
  },
  {
    value: 'Silken Windhound',
    label: 'Silken Windhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Fallon_the_Silken_Windhound.jpg/220px-Fallon_the_Silken_Windhound.jpg'
  },
  {
    value: 'Silky Terrier',
    label: 'Silky Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg/220px-Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg'
  },
  {
    value: 'Sinhala Hound',
    label: 'Sinhala Hound',
    origin: 'Sri Lanka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tomy1.jpg/220px-Tomy1.jpg'
  },
  {
    value: 'Skye Terrier',
    label: 'Skye Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Skye_terrier_800.jpg/220px-Skye_terrier_800.jpg'
  },
  {
    value: 'Sloughi',
    label: 'Sloughi',
    origin: 'North Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Sloughi_male.jpg/220px-Sloughi_male.jpg'
  },
  {
    value: 'Slovakian Wirehaired Pointer',
    label: 'Slovakian Wirehaired Pointer',
    origin: 'Slovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/ICh_Brita_z_Ruzenice.jpg/220px-ICh_Brita_z_Ruzenice.jpg'
  },
  {
    value: 'Slovenský Cuvac',
    label: 'Slovenský Cuvac',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cuvac_1.jpg/220px-Cuvac_1.jpg'
  },
  {
    value: 'Slovenský Kopov',
    label: 'Slovenský Kopov',
    origin: 'Slovakia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Go%C5%84czy_s%C5%82owacki_pl.jpg/220px-Go%C5%84czy_s%C5%82owacki_pl.jpg'
  },
  {
    value: 'Smalandstövare',
    label: 'Smalandstövare',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Smaland-St%C3%B6vare.jpg/220px-Smaland-St%C3%B6vare.jpg'
  },
  {
    value: 'Small Greek domestic dog',
    label: 'Small Greek domestic dog',
    origin: 'Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg/220px-KokoniPurebredDogsGreeceGreekCreamWhiteAdult.jpg'
  },
  {
    value: 'Small Münsterländer',
    label: 'Small Münsterländer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kleiner_M%C3%BCnsterl%C3%A4nder.jpg/220px-Kleiner_M%C3%BCnsterl%C3%A4nder.jpg'
  },
  {
    value: 'Smithfield',
    label: 'Smithfield',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Smooth Collie',
    label: 'Smooth Collie',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/SmoothCollie_TriColour.jpg/220px-SmoothCollie_TriColour.jpg'
  },
  {
    value: 'Smooth Fox Terrier',
    label: 'Smooth Fox Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Patrick_the_Smooth_Fox_Terrier.jpg/220px-Patrick_the_Smooth_Fox_Terrier.jpg'
  },
  {
    value: 'Soft-Coated Wheaten Terrier',
    label: 'Soft-Coated Wheaten Terrier',
    origin: 'Ireland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Australian_Grand_Champion_Dancestar_Zero_O_Seven_%22Bondy%22.jpg/220px-Australian_Grand_Champion_Dancestar_Zero_O_Seven_%22Bondy%22.jpg'
  },
  {
    value: 'South Russian Ovcharka',
    label: 'South Russian Ovcharka',
    origin: 'Russian EmpireSoviet UnionUkraineRussia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/South_Russian_Ovcharka.jpg/220px-South_Russian_Ovcharka.jpg'
  },
  {
    value: 'Spanish Mastiff',
    label: 'Spanish Mastiff',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Spanish_Mastiff.JPG/220px-Spanish_Mastiff.JPG'
  },
  {
    value: 'Spanish Water Dog',
    label: 'Spanish Water Dog',
    origin: 'Andalusia (Spain)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Perro_agua.jpg/220px-Perro_agua.jpg'
  },
  {
    value: 'Spino degli Iblei',
    label: 'Spino degli Iblei',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Spinone Italiano',
    label: 'Spinone Italiano',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/05042363_Spinone_braun.jpg/220px-05042363_Spinone_braun.jpg'
  },
  {
    value: 'Sporting Lucas Terrier',
    label: 'Sporting Lucas Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/LucasTerrier.jpg/220px-LucasTerrier.jpg'
  },
  {
    value: 'Stabyhoun',
    label: 'Stabyhoun',
    origin: 'The Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Frisianstaby.jpg/220px-Frisianstaby.jpg'
  },
  {
    value: 'Staffordshire Bull Terrier',
    label: 'Staffordshire Bull Terrier',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D7%A1%D7%90%D7%98%D7%A3_%D7%90%D7%A0%D7%92%D7%9C%D7%99.jpg/220px-%D7%A1%D7%90%D7%98%D7%A3_%D7%90%D7%A0%D7%92%D7%9C%D7%99.jpg'
  },
  {
    value: 'Standard Schnauzer',
    label: 'Standard Schnauzer',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Standard_Grey_Schnauzer_%28cropped%29.JPG/220px-Standard_Grey_Schnauzer_%28cropped%29.JPG'
  },
  {
    value: 'Stephens Stock',
    label: 'Stephens Stock',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Stephens_Cur.jpg/220px-Stephens_Cur.jpg'
  },
  {
    value: 'Styrian Coarse-haired Hound',
    label: 'Styrian Coarse-haired Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Steirische_Rauhhaarbracke.jpg/220px-Steirische_Rauhhaarbracke.jpg'
  },
  {
    value: 'Sussex Spaniel',
    label: 'Sussex Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sussex_spaniel_t43.jpg/220px-Sussex_spaniel_t43.jpg'
  },
  {
    value: 'Swedish Lapphund',
    label: 'Swedish Lapphund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Svensk_lapphund.JPG/220px-Svensk_lapphund.JPG'
  },
  {
    value: 'Swedish Vallhund',
    label: 'Swedish Vallhund',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/V%C3%A4stg%C3%B6taspets_hane_5_%C3%A5r.jpg/220px-V%C3%A4stg%C3%B6taspets_hane_5_%C3%A5r.jpg'
  },
  {
    value: 'Swinford Bandog',
    label: 'Swinford Bandog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Taigan',
    label: 'Taigan',
    origin: 'Kyrgyzstan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Taigan.jpg/220px-Taigan.jpg'
  },
  {
    value: 'Taiwan Dog',
    label: 'Taiwan Dog',
    origin: 'Taiwan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Formosan_nina.jpg/220px-Formosan_nina.jpg'
  },
  {
    value: 'Tamaskan Dog',
    label: 'Tamaskan Dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Northern_Inuit_Dog.jpg/240px-Northern_Inuit_Dog.jpg'
  },
  {
    value: 'Tang Dog',
    label: 'Tang Dog',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/HK_SW_QR_West_pet_Dog_walking_May_2021_SS2_05.jpg/220px-HK_SW_QR_West_pet_Dog_walking_May_2021_SS2_05.jpg'
  },
  {
    value: 'Tazy',
    label: 'Tazy',
    origin: 'Kazakhstan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chart_%C5%9Brodkowoazjatycki_Zeila.jpg/220px-Chart_%C5%9Brodkowoazjatycki_Zeila.jpg'
  },
  {
    value: 'Teddy Roosevelt Terrier',
    label: 'Teddy Roosevelt Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Teddyterrier.jpg/220px-Teddyterrier.jpg'
  },
  {
    value: 'Telomian',
    label: 'Telomian',
    origin: 'Malaysia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Telomian.jpg/220px-Telomian.jpg'
  },
  {
    value: 'Tenterfield Terrier',
    label: 'Tenterfield Terrier',
    origin: 'Australia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tenterfield_Terrier_01.jpg/220px-Tenterfield_Terrier_01.jpg'
  },
  {
    value: 'Terrier Brasileiro',
    label: 'Terrier Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Terrier_brazylijski_2.jpg/220px-Terrier_brazylijski_2.jpg'
  },
  {
    value: 'Thai Bangkaew Dog',
    label: 'Thai Bangkaew Dog',
    origin: 'Bang Rakam, Phitsanulok, Thailand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg/220px-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg'
  },
  {
    value: 'Thai Ridgeback',
    label: 'Thai Ridgeback',
    origin: 'Thailand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Thai-Ridgeback.jpg/220px-Thai-Ridgeback.jpg'
  },
  {
    value: 'Tibetan Kyi Apso',
    label: 'Tibetan Kyi Apso',
    origin: 'Tibet',
    img: 'Not available'
  },
  {
    value: 'Tibetan Mastiff',
    label: 'Tibetan Mastiff',
    origin: 'Tibetan Plateau',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg/220px-BIR_Grupp_2-_TIBETANSK_MASTIFF%2C_Legenda_Tibeta_Temudzhin_%2823938629470%29.jpg'
  },
  {
    value: 'Tibetan Spaniel',
    label: 'Tibetan Spaniel',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tibetansk_spaniel.jpg/220px-Tibetansk_spaniel.jpg'
  },
  {
    value: 'Tibetan Terrier',
    label: 'Tibetan Terrier',
    origin: 'Tibet',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tibet_Terrier_Bennie_%28cropped%29.jpg/220px-Tibet_Terrier_Bennie_%28cropped%29.jpg'
  },
  {
    value: 'Tonya Finosu',
    label: 'Tonya Finosu',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Tornjak',
    label: 'Tornjak',
    origin: 'Bosnia and Herzegovina, Croatia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bosniantornjak.jpg/220px-Bosniantornjak.jpg'
  },
  {
    value: 'Tosa Inu',
    label: 'Tosa Inu',
    origin: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/BUKADAI_2.jpg/220px-BUKADAI_2.jpg'
  },
  {
    value: 'Toy Fox Terrier',
    label: 'Toy Fox Terrier',
    origin: 'America',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Toy_Fox_Terrier_2.jpg/220px-Toy_Fox_Terrier_2.jpg'
  },
  {
    value: 'Toy Manchester Terrier',
    label: 'Toy Manchester Terrier',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Toy-manchester-terrier-weave.png/220px-Toy-manchester-terrier-weave.png'
  },
  {
    value: 'Transylvanian Hound',
    label: 'Transylvanian Hound',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Erdelyi_kopo_VadaszNimrodSzeder01.jpg/220px-Erdelyi_kopo_VadaszNimrodSzeder01.jpg'
  },
  {
    value: 'Treeing Cur',
    label: 'Treeing Cur',
    origin: 'United States',
    img: 'Not available'
  },
  {
    value: 'Treeing Feist',
    label: 'Treeing Feist',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/0809bigun.jpg/220px-0809bigun.jpg'
  },
  {
    value: 'Treeing Tennessee Brindle',
    label: 'Treeing Tennessee Brindle',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sienna_TTBD.jpg/220px-Sienna_TTBD.jpg'
  },
  {
    value: 'Treeing Walker Coonhound',
    label: 'Treeing Walker Coonhound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Treeing-walker-coonhound-standing.jpg/220px-Treeing-walker-coonhound-standing.jpg'
  },
  {
    value: 'Trigg Hound',
    label: 'Trigg Hound',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/AmericanFoxhound2.jpg/220px-AmericanFoxhound2.jpg'
  },
  {
    value: 'Tyrolean Hound',
    label: 'Tyrolean Hound',
    origin: 'Austria',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Tiroler_Bracke.jpg/220px-Tiroler_Bracke.jpg'
  },
  {
    value: 'Vikhan',
    label: 'Vikhan',
    origin: 'Pakistan, India',
    img: 'Not available'
  },
  {
    value: 'Villano de Las Encartaciones',
    label: 'Villano de Las Encartaciones',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Zakur_billanoa_Oramaiztegin_%28cropped%29.JPG/220px-Zakur_billanoa_Oramaiztegin_%28cropped%29.JPG'
  },
  {
    value: 'Villanuco de Las Encartaciones',
    label: 'Villanuco de Las Encartaciones',
    origin: 'Spain',
    img: 'Not available'
  },
  {
    value: 'Vizsla',
    label: 'Vizsla',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg/220px-Wy%C5%BCe%C5%82_w%C4%99gierski_g%C5%82adkow%C5%82osy_500.jpg'
  },
  {
    value: 'Volpino Italiano',
    label: 'Volpino Italiano',
    origin: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Szpic_miniaturowy_Volpino_MWPR_Katowice_2008_%28cropped%29.JPG/220px-Szpic_miniaturowy_Volpino_MWPR_Katowice_2008_%28cropped%29.JPG'
  },
  {
    value: 'Weimaraner',
    label: 'Weimaraner',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Weimaraner_wb.jpg/220px-Weimaraner_wb.jpg'
  },
  {
    value: 'Welsh Hound',
    label: 'Welsh Hound',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Welsh_Hound_from_1915.JPG/220px-Welsh_Hound_from_1915.JPG'
  },
  {
    value: 'Welsh Sheepdog',
    label: 'Welsh Sheepdog',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Welsh_Sheepdog.jpg/220px-Welsh_Sheepdog.jpg'
  },
  {
    value: 'Welsh Springer Spaniel',
    label: 'Welsh Springer Spaniel',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Welsh_Springer_Spaniel_1.jpg/220px-Welsh_Springer_Spaniel_1.jpg'
  },
  {
    value: 'Welsh Terrier',
    label: 'Welsh Terrier',
    origin: 'Wales',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Terier_walijski_suka_2009_pl.jpg/220px-Terier_walijski_suka_2009_pl.jpg'
  },
  {
    value: 'West Country Harrier',
    label: 'West Country Harrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Hounds_-_their_breeding_and_kennel_management_%281905%29_%2814740587676%29.jpg/220px-Hounds_-_their_breeding_and_kennel_management_%281905%29_%2814740587676%29.jpg'
  },
  {
    value: 'West Highland White Terrier',
    label: 'West Highland White Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/West_Highland_White_Terrier_Krakow.jpg/220px-West_Highland_White_Terrier_Krakow.jpg'
  },
  {
    value: 'West Siberian Laika',
    label: 'West Siberian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/West_Siberian_Laika.jpg/220px-West_Siberian_Laika.jpg'
  },
  {
    value: 'Westphalian Dachsbracke',
    label: 'Westphalian Dachsbracke',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Westf%C3%A4lische_Dachsbracke.jpg/220px-Westf%C3%A4lische_Dachsbracke.jpg'
  },
  {
    value: 'Wetterhoun',
    label: 'Wetterhoun',
    origin: 'Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fryzyjski_pies_wodny_u68.jpg/220px-Fryzyjski_pies_wodny_u68.jpg'
  },
  {
    value: 'Whippet',
    label: 'Whippet',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Whippet_2018_6.jpg/220px-Whippet_2018_6.jpg'
  },
  {
    value: 'White Shepherd',
    label: 'White Shepherd',
    origin: 'United States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kandestack_62406.jpg/220px-Kandestack_62406.jpg'
  },
  {
    value: 'White Swiss Shepherd Dog',
    label: 'White Swiss Shepherd Dog',
    origin: 'Switzerland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/White_Swiss_Shepherd_Dog_Djinn_%28cropped%29.JPG/220px-White_Swiss_Shepherd_Dog_Djinn_%28cropped%29.JPG'
  },
  {
    value: 'Wire Fox Terrier',
    label: 'Wire Fox Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Elias1%C4%8Derven2006.jpg/220px-Elias1%C4%8Derven2006.jpg'
  },
  {
    value: 'Wirehaired Pointing Griffon',
    label: 'Wirehaired Pointing Griffon',
    origin: 'Netherlands, Germany, France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/GCH_Int_Ch_UCH_Zerubbabel_von_Herrenhausen_CGC_MHA.jpg/220px-GCH_Int_Ch_UCH_Zerubbabel_von_Herrenhausen_CGC_MHA.jpg'
  },
  {
    value: 'Wirehaired Vizsla',
    label: 'Wirehaired Vizsla',
    origin: 'Hungary',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dr%C3%B3tosvizsla_vadat_%C3%A1ll.jpg/220px-Dr%C3%B3tosvizsla_vadat_%C3%A1ll.jpg'
  },
  {
    value: 'Xiasi Dog',
    label: 'Xiasi Dog',
    origin: 'China',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Xiasi_Quan_dog.jpg/220px-Xiasi_Quan_dog.jpg'
  },
  {
    value: 'Xoloitzcuintle',
    label: 'Xoloitzcuintle',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg/220px-BIR_Grupp_5-_MEXIKANSK_NAKENHUND%2C_Lokal_Hero%E2%80%99s_King_Og_Hart%E2%80%99s_Istas_%2823607403303%29.jpg'
  },
  {
    value: 'Yakutian Laika',
    label: 'Yakutian Laika',
    origin: 'Russia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Yl01.jpg/220px-Yl01.jpg'
  },
  {
    value: 'Yorkshire Terrier',
    label: 'Yorkshire Terrier',
    origin: 'Yorkshire, England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/%282_version%29_Grupp_3%2C_YORKSHIRETERRIER%2C_NO_UCH_SE_UCH_Oxzar_Amazing_Bel%E2%80%99s_Toffy_%2824310212305%29.jpg/220px-%282_version%29_Grupp_3%2C_YORKSHIRETERRIER%2C_NO_UCH_SE_UCH_Oxzar_Amazing_Bel%E2%80%99s_Toffy_%2824310212305%29.jpg'
  },
  {
    value: 'Zerdava',
    label: 'Zerdava',
    origin: 'Turkey, Georgia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Zerdava_dog.jpg/220px-Zerdava_dog.jpg'
  },
  {
    value: 'African hairless dog',
    label: 'African hairless dog',
    origin: 'Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Africanhairless.jpg/220px-Africanhairless.jpg'
  },
  {
    value: 'Alaunt',
    label: 'Alaunt',
    origin: 'Pontic-Caspian Steppe',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alaunt_in_Adorazione_dei_Magi_by_Gentile_da_Fabriano.jpg/220px-Alaunt_in_Adorazione_dei_Magi_by_Gentile_da_Fabriano.jpg'
  },
  {
    value: 'Alpine Mastiff',
    label: 'Alpine Mastiff',
    origin: 'Swiss and Italian Alps',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/1815_Alpine_Mastiff.jpg/220px-1815_Alpine_Mastiff.jpg'
  },
  {
    value: 'Belgian Mastiff',
    label: 'Belgian Mastiff',
    origin: 'Belgium and the Netherlands',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Draught_Dog_from_1915.JPG/220px-Draught_Dog_from_1915.JPG'
  },
  {
    value: 'Black and Tan Terrier',
    label: 'Black and Tan Terrier',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Old_English_Black_and_Tan_Terrier.jpg/220px-Old_English_Black_and_Tan_Terrier.jpg'
  },
  {
    value: 'Blue Paul Terrier',
    label: 'Blue Paul Terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg/220px-Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg'
  },
  {
    value: 'Braque Dupuy',
    label: 'Braque Dupuy',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dupuy_Pointer_from_1915.JPG/220px-Dupuy_Pointer_from_1915.JPG'
  },
  {
    value: 'Buckhound',
    label: 'Buckhound',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/William_H_Hopkins_%28active_1853-1890-d._1892%29_-_Her_Majesty%27s_Buckhounds_with_the_Earl_of_Hardwicke%2C_Huntsmen_and_Whips_-_RCIN_407840_-_Royal_Collection.jpg/220px-William_H_Hopkins_%28active_1853-1890-d._1892%29_-_Her_Majesty%27s_Buckhounds_with_the_Earl_of_Hardwicke%2C_Huntsmen_and_Whips_-_RCIN_407840_-_Royal_Collection.jpg'
  },
  {
    value: 'Bull and terrier',
    label: 'Bull and terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg/220px-Philippe_Rousseau_-_Best_Of_Friends_-_Bulldog_%26_Bull_Terrier.jpg'
  },
  {
    value: 'Bullenbeisser',
    label: 'Bullenbeisser',
    origin: 'Germany',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bullenbeiser.jpg/220px-Bullenbeiser.jpg'
  },
  {
    value: 'Chien-gris',
    label: 'Chien-gris',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Gris_De_Saint-Louis_from_1915.JPG/220px-Gris_De_Saint-Louis_from_1915.JPG'
  },
  {
    value: 'Chiribaya Dog',
    label: 'Chiribaya Dog',
    origin: 'Peru',
    img: 'Not available'
  },
  {
    value: 'Córdoba fighting dog',
    label: 'Córdoba fighting dog',
    origin: 'Argentina',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Patan.jpg/220px-Patan.jpg'
  },
  {
    value: 'Cumberland Sheepdog',
    label: 'Cumberland Sheepdog',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Cumberland-sheepdog.jpg/220px-Cumberland-sheepdog.jpg'
  },
  {
    value: 'Cur',
    label: 'Cur',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cur_dog%2C_A_general_history_of_quadrupeds.jpg/220px-Cur_dog%2C_A_general_history_of_quadrupeds.jpg'
  },
  {
    value: 'Dalbo dog',
    label: 'Dalbo dog',
    origin: 'Sweden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dalbohund.jpg/220px-Dalbohund.jpg'
  },
  {
    value: 'Dogo Cubano',
    label: 'Dogo Cubano',
    origin: 'Cuba',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/DogoCubano2.jpg/220px-DogoCubano2.jpg'
  },
  {
    value: 'Dumfriesshire Black and Tan Foxhound',
    label: 'Dumfriesshire Black and Tan Foxhound',
    origin: 'United Kingdom',
    img: 'Not available'
  },
  {
    value: 'English Water Spaniel',
    label: 'English Water Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/English_Water_Spaniel.jpg/220px-English_Water_Spaniel.jpg'
  },
  {
    value: 'English White Terrier',
    label: 'English White Terrier',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Old_English_White_Terrier.jpg/220px-Old_English_White_Terrier.jpg'
  },
  {
    value: 'Fila da Terceira',
    label: 'Fila da Terceira',
    origin: 'Portugal',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Fila_de_Terceira.jpg/220px-Fila_de_Terceira.jpg'
  },
  {
    value: 'Fuegian dog',
    label: 'Fuegian dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Grand Fauve de Bretagne',
    label: 'Grand Fauve de Bretagne',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Grand_Fauve_de_Bretagne.jpg/220px-Grand_Fauve_de_Bretagne.jpg'
  },
  {
    value: 'Halls Heeler',
    label: 'Halls Heeler',
    origin: 'Not available',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Front_drive_up_to_Trackson%27s_property.jpg/220px-Front_drive_up_to_Trackson%27s_property.jpg'
  },
  {
    value: 'Hare Indian Dog',
    label: 'Hare Indian Dog',
    origin: 'CanadaUnited States',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hareindiandog.jpg/220px-Hareindiandog.jpg'
  },
  {
    value: 'Hawaiian Poi Dog',
    label: 'Hawaiian Poi Dog',
    origin: 'Hawaii (United States)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hawaiian_natives_wearing_kihei%2C_with_animals%2C_sketch_by_Louis_Choris_%28crop%2C_central_dog%29.jpg/220px-Hawaiian_natives_wearing_kihei%2C_with_animals%2C_sketch_by_Louis_Choris_%28crop%2C_central_dog%29.jpg'
  },
  {
    value: "King's White Hound",
    label: "King's White Hound",
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jean-Baptiste_Oudry_-_La_chasse_au_chevreuilt_%281725%29.jpg/220px-Jean-Baptiste_Oudry_-_La_chasse_au_chevreuilt_%281725%29.jpg'
  },
  {
    value: 'Kurī',
    label: 'Kurī',
    origin: 'New Zealand',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Otago_Museum_Kuri_-_OMNZVT2162_03_%28cropped%29.jpg/220px-Otago_Museum_Kuri_-_OMNZVT2162_03_%28cropped%29.jpg'
  },
  {
    value: 'Lapponian Shepherd',
    label: 'Lapponian Shepherd',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Limer',
    label: 'Limer',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Marquesan Dog',
    label: 'Marquesan Dog',
    origin: 'Marquesas Islands (French Polynesia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dog_relief_from_me%CA%BBae_I%CA%BBipona%2C_Puama%CA%BBu_Village%2C_Hiva_Oa%2C_Marquesas_Islands%2C_photograph_by_Moth_Clark%2C_2009_%28levels_adjusted%29.jpg/300px-Dog_relief_from_me%CA%BBae_I%CA%BBipona%2C_Puama%CA%BBu_Village%2C_Hiva_Oa%2C_Marquesas_Islands%2C_photograph_by_Moth_Clark%2C_2009_%28levels_adjusted%29.jpg'
  },
  {
    value: 'Molossus',
    label: 'Molossus',
    origin: 'Epirus, ancient Greece',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Molossian_Hound%2C_British_Museum.jpg/220px-Molossian_Hound%2C_British_Museum.jpg'
  },
  {
    value: 'Moscow Water Dog',
    label: 'Moscow Water Dog',
    origin: 'Russia',
    img: 'Not available'
  },
  {
    value: 'Norfolk Spaniel',
    label: 'Norfolk Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dash-II-Norfolk-Spaniel.jpg/220px-Dash-II-Norfolk-Spaniel.jpg'
  },
  {
    value: 'Norman Hound',
    label: 'Norman Hound',
    origin: 'France',
    img: 'Not available'
  },
  {
    value: 'North Country Beagle',
    label: 'North Country Beagle',
    origin: 'Great Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Beagle_%28PSF%29.png/220px-Beagle_%28PSF%29.png'
  },
  {
    value: 'Old Croatian Sighthound',
    label: 'Old Croatian Sighthound',
    origin: 'Bosnia–Herzegovina & Croatia',
    img: 'Not available'
  },
  {
    value: 'Old English Bulldog',
    label: 'Old English Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/CribandRosa1811.jpg/220px-CribandRosa1811.jpg'
  },
  {
    value: 'Old Spanish Pointer',
    label: 'Old Spanish Pointer',
    origin: 'Spain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spanish_Pointer_from_1915.JPG/220px-Spanish_Pointer_from_1915.JPG'
  },
  {
    value: 'Old Welsh Grey Sheepdog',
    label: 'Old Welsh Grey Sheepdog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Paisley Terrier',
    label: 'Paisley Terrier',
    origin: 'Scotland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Paisley1903.jpg/220px-Paisley1903.jpg'
  },
  {
    value: 'Polynesian Dog',
    label: 'Polynesian Dog',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Rache',
    label: 'Rache',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Rastreador Brasileiro',
    label: 'Rastreador Brasileiro',
    origin: 'Brazil',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Rastreadora_Brasileira_Gaya.jpg/220px-Rastreadora_Brasileira_Gaya.jpg'
  },
  {
    value: "Saint John's water dog",
    label: "Saint John's water dog",
    origin: 'Newfoundland',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/St_Johns_dog.jpg/220px-St_Johns_dog.jpg'
  },
  {
    value: 'Sakhalin Husky',
    label: 'Sakhalin Husky',
    origin: 'Russia and Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sakhalin_Husky_Jiro.JPG/220px-Sakhalin_Husky_Jiro.JPG'
  },
  {
    value: 'Salish Wool Dog',
    label: 'Salish Wool Dog',
    origin: 'Washington state and British Columbia',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/PaulKane_-_A_Woman_Weaving_a_Blanket_%28ROM2005_5163%29.jpg/220px-PaulKane_-_A_Woman_Weaving_a_Blanket_%28ROM2005_5163%29.jpg'
  },
  {
    value: 'Sleuth hound',
    label: 'Sleuth hound',
    origin: 'Not available',
    img: 'Not available'
  },
  {
    value: 'Southern Hound',
    label: 'Southern Hound',
    origin: 'Britain',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Southern_Hound.jpg/220px-Southern_Hound.jpg'
  },
  {
    value: 'Staghound',
    label: 'Staghound',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/John_Scott%27s_Stag_hound%2C_The_sportsman%27s_repository%2C_1845.jpg/220px-John_Scott%27s_Stag_hound%2C_The_sportsman%27s_repository%2C_1845.jpg'
  },
  {
    value: 'Tahitian Dog',
    label: 'Tahitian Dog',
    origin: 'Tahiti, Society Islands (French Polynesia)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Double_canoes._Tipaerua%2C_1769-71_%28crop_of_dog%29.jpg/220px-Double_canoes._Tipaerua%2C_1769-71_%28crop_of_dog%29.jpg'
  },
  {
    value: 'Tahltan Bear Dog',
    label: 'Tahltan Bear Dog',
    origin: 'Northern Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Tahltan_Bear_Dog_sketch2.jpg/220px-Tahltan_Bear_Dog_sketch2.jpg'
  },
  {
    value: 'Talbot Hound',
    label: 'Talbot Hound',
    origin: 'Uncertain, possibly Belgium / France (Normandy) or England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/TalbotHound_Talbot_Shrewsbury_Book_1445.png/220px-TalbotHound_Talbot_Shrewsbury_Book_1445.png'
  },
  {
    value: 'Techichi',
    label: 'Techichi',
    origin: 'Mexico',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Colima_-_Dog_Effigy_-_Walters_20092051_-_Three_Quarter_Left.jpg/220px-Colima_-_Dog_Effigy_-_Walters_20092051_-_Three_Quarter_Left.jpg'
  },
  {
    value: 'Tesem',
    label: 'Tesem',
    origin: 'Egypt',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tesem_couple.png/220px-Tesem_couple.png'
  },
  {
    value: 'Toy Bulldog',
    label: 'Toy Bulldog',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Toy_Bulldog_Little_Knot_1903.jpg/220px-Toy_Bulldog_Little_Knot_1903.jpg'
  },
  {
    value: 'Toy Trawler Spaniel',
    label: 'Toy Trawler Spaniel',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Trawler_spaniel_goblin.jpg/220px-Trawler_spaniel_goblin.jpg'
  },
  {
    value: 'Turnspit dog',
    label: 'Turnspit dog',
    origin: 'United Kingdom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Turnspitdog-1862.jpg/300px-Turnspitdog-1862.jpg'
  },
  {
    value: 'Tweed Water Spaniel',
    label: 'Tweed Water Spaniel',
    origin: 'England',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tweed_Water_Spaniel.jpg/220px-Tweed_Water_Spaniel.jpg'
  },
  {
    value: 'Welsh Hillman',
    label: 'Welsh Hillman',
    origin: 'Wales',
    img: 'Not available'
  },
  {
    value: 'Africanis',
    label: 'Africanis',
    origin: 'Southern Africa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Africanis_%281%29.jpg/220px-Africanis_%281%29.jpg'
  },
  {
    value: 'Saint-Usuge Spaniel',
    label: 'Saint-Usuge Spaniel',
    origin: 'France',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EpagneuldeSaintUsuge.jpg/220px-EpagneuldeSaintUsuge.jpg'
  },
  {
    value: 'Aidi',
    label: 'Aidi',
    origin: 'Morocco (standard holder) Maghreb (region of origin)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Aidi.jpg/220px-Aidi.jpg'
  },
  {
    value: 'Coton de Tuléar',
    label: 'Coton de Tuléar',
    origin: 'Madagascar',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coton_de_Tular_1.jpg/220px-Coton_de_Tular_1.jpg'
  }
];

export default breeds;
