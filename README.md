W razie potrzeby aplikację umieściłem również na github pages, tak aby łatwiej było ją uruchomić :)

Dokumentacja Bank_Task:

Cała aplikacja napisana została z użyciem tylko czystego JS oraz HTML i składa się z trzech funkcjonalności, jedna odpowiadająca za wygenerowanie listy banków, wraz z oprocentowaniem, prowizją, cyklem kapitalizacji środków oraz początkowymi środkami. Jednocześnie aktywuje ona całą funkcjonalność banku, kapitalizację środków oraz aktualizację oprocentowania. Druga funkcjonalność to transfer gotówki między bankami, a trzecia łączy transfer środków pomiędzy bankami z kapitalizacją funduszy. Poniżej wyjaśnię poszczególne pliki oraz co zawierają:

  ./Components/generateBanks.js - Funkcja generująca obiekt banku oraz dodająca go do listy banków. Ilość banków jest zdefiniowana w pliku index.js. Obiekt banku składa się z nazwy, cyklu kapitalizacji środków w sekundach, prowizji w procentach, oprocentowania w procentach, kapitał oraz wartość startowa w złotówkach. Wartość startowa jest używana później przy ewaluacji. Oprócz listy z obiektami banków, zwracana jest również lista z oprocentowaniem każdego banku, która służy do określenia najlepszego banku do trzymania środków w danym momencie.

  ./Components/activateBanks.js - Funkcja aktywująca kapitalizację środków oraz aktualizację oprocentowania jak i w banku, tak i w liście z oprocentowaniem każdego banku. Funkcja ta wykorzystuje pętlę, która przechodząc po każdym elemencie listy aktywuje interwał. Czas interwału oparty jest na określonej wartości cyklu kapitalizacji w każdym banku. Math.round() zostało wykorzystane w celu zaokrąglenia wartości do dwóch miejsc po przecinku, tak jak w rzeczywistości.

  ./Components/transferMoney.js - Funkcja odpowiadająca za przesył pieniędzy pomiędzy bankami. Automatycznie wyklucza z pętli przesłanie pieniędzy z najlepszego banku do najlepszego banku. Operuje przesył na takiej zasadzie, iż najpierw dodaje on połowe środków z jednego konta na najbardziej opłacalne konto, później aktualizuje wartość wejściową na koncie, a dopiero na koniec redukuje wartość środków na koncie z którego wysłane były fundusze. Funkcja zamiast przesyłać całe osczędności z banku do banku, przesyła jedynie połowę.

  ./index.js - Główna funkcjonalność aplikacji, która łączy wszystkie funkcje. Najpierw importuje metody z poszczególnych plików, następnie stworzyłem referencję do <div> tagu o id=values, do którego zostanie umieszczony kod HTML z wartościami.
  
Wartość let amountOfBanks, można dowolnie modyfikować na wartość całkowitą, większą od 1. Testowałem do 6000 banków i działało tak jak miało działać. 

Następnie aktywuje funkcje odpowiedzialne za wygenerowanie banków oraz uruchomienie funkcjonalności banków. Zmienna startingValue, wykorzystana jest przy umieszczeniu na stronie w tekście sumy wartości kapitału z którym zaczynaliśmy. 

Następnie mamy pierwszy interwał oraz główną logikę aplikacji, która jednocześnie częściowo była zadaniem. Interwał ma za zadanie zweryfikować poszczególne wartości, czy uzyskany kapitał, po przelaniu do innego banku, będzie większy od wartości z którą zaczynaliśmy w tym banku (albo na początku albo po przelaniu części środków na inne konto). Dzięki temu unikniemy przelania środków, w momencie w którym mogłoby to spowodować utratę środków. Każdy bank który spełni powyższy warunek, zostanie dodany do listy z bankami do transferu pieniędzy. Jeżeli ilość banków do transferu w liście, przekroczy 2, to dopiero wtedy nastąpi transfer środków (bazowo pierwszym elementem na liście, jest bank który w danym momencie ma najkorzystniejsze oprocentowanie). Interwał jest ustawiony na 5 sekund, jako iż jest to najmniejsza wartość po jakiej może nastąpić cykl kapitalizacji odsetek.

Ostatni interwał, odpowiada za pokazanie na stronie początkowego całkowitego kapitału, obecnego całkowitego kapitału oraz kapitału znajdującego się w poszczególnych bankach i jest ustawiony na 60 sekund.
