# Place schema

Not visited is one form for every category. A visited café and a visited restaurant share one form. A club uses that same findings list, with Club selected. A stay has its own findings.

Description, review, caveats, and alt each have one value per language: en, id, ja, ko, zh-CN, ru. Where the field appears, English is required. The other languages are optional and fall back to English. Every other field has one value.

## 1. Not visited

```text
Visit              (•) Not visited  ( ) Visited                                      required
Category           ( ) Café  ( ) Restaurant  ( ) Stay  ( ) Club                      required

Name               [ ]                                                               required
Slug               [ ]                                                               required
Area               [ ]                                                               required
Cutout             [ image ]                                                         required
  Alt              [ ]                                                               required

Description        [ ]                                                               required

Maps               ( ) None  ( ) URL [ ]                                             required
Instagram          ( ) None  ( ) Value [ ]                                           required
Threads            ( ) None  ( ) Value [ ]                                           required
TikTok             ( ) None  ( ) Value [ ]                                           required
Website            ( ) None  ( ) URL [ ]                                             required
Phone              ( ) None  ( ) Value [ ]                                           required
WhatsApp           ( ) None  ( ) Value [ ]                                           required
Address            ( ) None  ( ) Value [ ]                                           required
Postal code        ( ) None  ( ) Value [ ]                                           required
Coordinates        ( ) None  ( ) Point [ lat, lng ]                                  required
```

## 2. Visited, café or restaurant

```text
Visit              ( ) Not visited  (•) Visited                                      required
Category           ( ) Café  ( ) Restaurant                                          required

Name               [ ]                                                               required
Slug               [ ]                                                               required
Area               [ ]                                                               required
Cutout             [ image ]                                                         required
  Alt              [ ]                                                               required

Description        [ ]                                                               required

Maps               ( ) None  ( ) URL [ ]                                             required
Instagram          ( ) None  ( ) Value [ ]                                           required
Threads            ( ) None  ( ) Value [ ]                                           required
TikTok             ( ) None  ( ) Value [ ]                                           required
Website            ( ) None  ( ) URL [ ]                                             required
Phone              ( ) None  ( ) Value [ ]                                           required
WhatsApp           ( ) None  ( ) Value [ ]                                           required
Address            ( ) None  ( ) Value [ ]                                           required
Postal code        ( ) None  ( ) Value [ ]                                           required
Coordinates        ( ) None  ( ) Point [ lat, lng ]                                  required

Badge              ( ) No badge  ( ) Approved  ( ) Good find                         required
Spending minimum   ( ) No minimum  ( ) Amount [ ]                                    required
Spending maximum   ( ) No maximum  ( ) Amount [ ]                                    required

Review             [ ]                                                               required
Caveats            [ ]                                                               required
Gallery            [ image ]                                                         required, at least one
  Alt              [ ]                                                               required

Visit dates        [ ]                                                               required, at least one

Wi-Fi              ( ) Unavailable  ( ) Unknown  ( ) Unmeasured  ( ) Mbps [ ]        required
Noise              ( ) Quiet  ( ) Moderate  ( ) Loud                                 required
Motorbike parking  ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Car parking        ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Power outlets      ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable              required
Seating            [ ] Indoor  [ ] Outdoor  [ ] Semi-outdoor                         required, at least one
Music              ( ) Available  ( ) Unavailable  ( ) Unknown                       required
Toilet             ( ) Available  ( ) Unavailable  ( ) Unknown                       required
Reservation        ( ) Not needed  ( ) Recommended  ( ) Required                     required
```

## 3. Visited, stay

```text
Visit              ( ) Not visited  (•) Visited                                      required
Category           (•) Stay                                                          required

Name               [ ]                                                               required
Slug               [ ]                                                               required
Area               [ ]                                                               required
Cutout             [ image ]                                                         required
  Alt              [ ]                                                               required

Description        [ ]                                                               required

Maps               ( ) None  ( ) URL [ ]                                             required
Instagram          ( ) None  ( ) Value [ ]                                           required
Threads            ( ) None  ( ) Value [ ]                                           required
TikTok             ( ) None  ( ) Value [ ]                                           required
Website            ( ) None  ( ) URL [ ]                                             required
Phone              ( ) None  ( ) Value [ ]                                           required
WhatsApp           ( ) None  ( ) Value [ ]                                           required
Address            ( ) None  ( ) Value [ ]                                           required
Postal code        ( ) None  ( ) Value [ ]                                           required
Coordinates        ( ) None  ( ) Point [ lat, lng ]                                  required

Badge              ( ) No badge  ( ) Approved  ( ) Good find                         required
Spending minimum   ( ) No minimum  ( ) Amount [ ]                                    required
Spending maximum   ( ) No maximum  ( ) Amount [ ]                                    required

Review             [ ]                                                               required
Caveats            [ ]                                                               required
Gallery            [ image ]                                                         required, at least one
  Alt              [ ]                                                               required

Visit dates        [ ]                                                               required, at least one

Wi-Fi              ( ) Unavailable  ( ) Unknown  ( ) Unmeasured  ( ) Mbps [ ]        required
Noise              ( ) Quiet  ( ) Moderate  ( ) Loud                                 required
Motorbike parking  ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Car parking        ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Cooling            ( ) AC  ( ) Fan  ( ) AC and fan  ( ) Open air                     required
Room type          ( ) Private studio  ( ) Private room  ( ) Shared dorm             required
Bathroom           ( ) Private  ( ) Shared                                           required
Kitchen            ( ) Private  ( ) Shared  ( ) Unavailable                          required
Pool               ( ) Available  ( ) Unavailable  ( ) Unknown                       required
```

## 4. Visited, club

```text
Visit              ( ) Not visited  (•) Visited                                      required
Category           (•) Club                                                          required

Name               [ ]                                                               required
Slug               [ ]                                                               required
Area               [ ]                                                               required
Cutout             [ image ]                                                         required
  Alt              [ ]                                                               required

Description        [ ]                                                               required

Maps               ( ) None  ( ) URL [ ]                                             required
Instagram          ( ) None  ( ) Value [ ]                                           required
Threads            ( ) None  ( ) Value [ ]                                           required
TikTok             ( ) None  ( ) Value [ ]                                           required
Website            ( ) None  ( ) URL [ ]                                             required
Phone              ( ) None  ( ) Value [ ]                                           required
WhatsApp           ( ) None  ( ) Value [ ]                                           required
Address            ( ) None  ( ) Value [ ]                                           required
Postal code        ( ) None  ( ) Value [ ]                                           required
Coordinates        ( ) None  ( ) Point [ lat, lng ]                                  required

Badge              ( ) No badge  ( ) Approved  ( ) Good find                         required
Spending minimum   ( ) No minimum  ( ) Amount [ ]                                    required
Spending maximum   ( ) No maximum  ( ) Amount [ ]                                    required

Review             [ ]                                                               required
Caveats            [ ]                                                               required
Gallery            [ image ]                                                         required, at least one
  Alt              [ ]                                                               required

Visit dates        [ ]                                                               required, at least one

Wi-Fi              ( ) Unavailable  ( ) Unknown  ( ) Unmeasured  ( ) Mbps [ ]        required
Noise              ( ) Quiet  ( ) Moderate  ( ) Loud                                 required
Motorbike parking  ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Car parking        ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable  ( ) Street  required
Power outlets      ( ) Plenty  ( ) Enough  ( ) Limited  ( ) Unavailable              required
Seating            [ ] Indoor  [ ] Outdoor  [ ] Semi-outdoor                         required, at least one
Music              ( ) Available  ( ) Unavailable  ( ) Unknown                       required
Toilet             ( ) Available  ( ) Unavailable  ( ) Unknown                       required
Reservation        ( ) Not needed  ( ) Recommended  ( ) Required                     required
```
