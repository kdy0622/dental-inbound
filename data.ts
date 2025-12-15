import { ManualData } from './types';

export const MANUAL_DATA: ManualData = {
  "hospital_name": "젊어지는치과",
  "document_date": "2025-12-15",
  "purpose": "신입 상담 콜센터 직원 교육 및 업무 매뉴얼",
  "glossary": [
    // 1. 보존 및 신경치료
    {
      "category": "보존/신경치료",
      "term_eng": "Amalgam Filling (AF)",
      "pronunciation": "아말감 필링",
      "term_kor": "아말감 충전",
      "description": "아말감 충전.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Resin Filling (RF)",
      "pronunciation": "레진 필링",
      "term_kor": "레진 충전",
      "description": "플라스틱 계통의 치아색과 같은 재료(레진)로 충전. 충치 부위가 좁은 경우에 많이 사용.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Proximal RF",
      "pronunciation": "프록시말 레진",
      "term_kor": "인접면 레진 충전",
      "description": "치아와 치아 사이. 인접면 부위에 레진 충전.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Cervical abrasion (CA) / Class V (CV)",
      "pronunciation": "서비컬 어브레이젼 / 클래스 파이브",
      "term_kor": "치경부 마모증",
      "description": "치경부 마모증 부위를 레진으로 때우는 치료 방법.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Sealant",
      "pronunciation": "실란트",
      "term_kor": "치아 홈 메우기",
      "description": "영구치의 깊은 홈을 코팅 재료로 메워 충치를 예방하는 치료.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Endodontic Treatment (Endo)",
      "pronunciation": "엔도 / 알씨티",
      "term_kor": "신경치료",
      "description": "= Root Canal Treatment (RCT).",
      "related_terms": ["RCT"]
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Pulp Extirpation (PE)",
      "pronunciation": "펄프 익스터페이션 / 발수",
      "term_kor": "발수",
      "description": "신경치료 첫날, 신경의 일부를 제거하는 것 (Access opening / AO 포함).",
      "related_terms": ["Access opening (AO)"]
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Canal Enlargement (CE)",
      "pronunciation": "카날 인라지먼트",
      "term_kor": "근관확대",
      "description": "신경관을 확대하는 것.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Canal Irrigation (CI)",
      "pronunciation": "카날 이리게이션",
      "term_kor": "근관세척",
      "description": "신경관을 소독, 세척하는 것.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Canal Filling (CF)",
      "pronunciation": "카날 필링",
      "term_kor": "근관충전",
      "description": "신경치료 마지막 날, 신경이 제거된 공간에 치과용 재료를 이용해서 충전하는 것.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "One visit Endo",
      "pronunciation": "원 비짓 엔도",
      "term_kor": "당일 발수 근충",
      "description": "1회에 신경치료가 끝남.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Re-endo",
      "pronunciation": "리엔도",
      "term_kor": "재신경치료",
      "description": "신경치료를 다시 하는 것.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Core",
      "pronunciation": "코어",
      "term_kor": "코어",
      "description": "신경치료 끝난 후 치아 내 와동을 치과 재료로 수복하는 것.",
      "related_terms": []
    },
    {
      "category": "보존/신경치료",
      "term_eng": "Post",
      "pronunciation": "포스트",
      "term_kor": "기둥",
      "description": "남아 있는 치아의 양이 적을 경우 기둥을 세워 치아를 보강하는 것.",
      "related_terms": []
    },

    // 2. 보철
    {
      "category": "보철",
      "term_eng": "Inlay",
      "pronunciation": "인레이",
      "term_kor": "인레이",
      "description": "충치 부위를 제거하고 그 제거한 부위를 본을 떠서 금이나 레진으로 끼우는 치료.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Gold inlay (G.inlay)",
      "pronunciation": "골드 인레이",
      "term_kor": "금 인레이",
      "description": "금으로 만든 인레이.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Resin inlay (R.inlay)",
      "pronunciation": "레진 인레이",
      "term_kor": "레진 인레이",
      "description": "레진으로 만든 인레이.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Onlay",
      "pronunciation": "온레이",
      "term_kor": "온레이",
      "description": "인레이보다 범위가 더 클 때. 교두(cusp)가 포함되었을 때의 명칭.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Crown (Cr)",
      "pronunciation": "크라운",
      "term_kor": "크라운",
      "description": "치아를 완전히 씌우는 것.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Gold crown (G.Cr)",
      "pronunciation": "골드 크라운",
      "term_kor": "금니",
      "description": "금으로 된 크라운.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "P.F.M (Porcelain Fused Metal)",
      "pronunciation": "피에프엠",
      "term_kor": "P.F.M",
      "description": "겉은 도자기(치아 색)이고 안쪽은 메탈(금속)로 된 크라운.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "P.F.G (Porcelain Fused Gold)",
      "pronunciation": "피에프지",
      "term_kor": "P.F.G",
      "description": "겉은 도자기(치아색)이고 안쪽은 금으로 된 크라운.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "All Ceramic",
      "pronunciation": "올세라믹",
      "term_kor": "올세라믹",
      "description": "치아를 전부 도자기로 씌우는 것 (종류- Empress, Zirconia 등).",
      "related_terms": ["Zirconia"]
    },
    {
      "category": "보철",
      "term_eng": "Laminate",
      "pronunciation": "라미네이트",
      "term_kor": "라미네이트",
      "description": "앞니의 앞면을 살짝 깎고 예쁘게 만든 손톱 모양의 인공치아를 붙이는 것.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Bridge (br)",
      "pronunciation": "브릿지",
      "term_kor": "브릿지",
      "description": "치아가 하나 이상 없을 때 앞뒤의 치아를 깎아서 연결해 놓은 것.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Pontic",
      "pronunciation": "파닉",
      "term_kor": "가공치",
      "description": "Bridge의 인공치 부분.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Denture",
      "pronunciation": "덴쳐",
      "term_kor": "틀니",
      "description": "틀니.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Temporary Denture",
      "pronunciation": "템포러리 덴쳐 / 템덴쳐",
      "term_kor": "임시틀니",
      "description": "임시로 사용하는 틀니.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Full Denture (FD)",
      "pronunciation": "풀 덴쳐",
      "term_kor": "완전 틀니",
      "description": "치아가 하나도 없는 경우에 사용.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "R.P.D (Removeable Partial Denture)",
      "pronunciation": "알피디",
      "term_kor": "부분 틀니",
      "description": "치아가 몇 개 남아있는 경우.",
      "related_terms": []
    },
    {
      "category": "보철",
      "term_eng": "Overdenture",
      "pronunciation": "오버덴쳐",
      "term_kor": "오버덴쳐",
      "description": "임플란트에 바(bar)를 연결하여 틀니를 거기다 똑딱이로 붙이거나 자석으로 붙이는 방법.",
      "related_terms": []
    },

    // 3. 치주
    {
      "category": "치주",
      "term_eng": "Scaling (SC)",
      "pronunciation": "스케일링",
      "term_kor": "스케일링",
      "description": "치석이나 착색 등을 제거하는 치료.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "Curettage (CU)",
      "pronunciation": "큐렛",
      "term_kor": "잇몸치료",
      "description": "보통 '큐렛'으로 불림. 잇몸 안쪽의 염증을 긁어내는 치료.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "Flap Operation (Flap op)",
      "pronunciation": "플랩 오퍼레이션",
      "term_kor": "치은박리소파술",
      "description": "잇몸 치료 방법. 잇몸 염증이 심한 경우 절개를 해서 시야 확보 후 염증 및 치석을 긁어내는 것.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "Gingivectomy",
      "pronunciation": "진지벡토미",
      "term_kor": "치은절제술",
      "description": "잇몸이 심하게 증식된 경우에 잇몸을 절제하는 치료. 상악 전치부(앞니)의 치아가 짧아 보이는 경우에도 시행.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "CLP (Crown Lengthening Procedure)",
      "pronunciation": "씨엘피",
      "term_kor": "치관확장술",
      "description": "보철물 씌우기 전에 치아 길이가 짧아서 유지력이 약해 잇몸을 절제하는 치료.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "Apicoectomy (Apico)",
      "pronunciation": "아피코",
      "term_kor": "치근단절제술",
      "description": "치아 끝에 염증이 있는 경우 치근단을 잘라내는 술식.",
      "related_terms": []
    },
    {
      "category": "치주",
      "term_eng": "I & D",
      "pronunciation": "아이 앤 디",
      "term_kor": "절개 및 배농",
      "description": "구강 내 소염술. 고름을 짜내는 치료.",
      "related_terms": []
    },

    // 4. 외과
    {
      "category": "외과",
      "term_eng": "Extraction (ext)",
      "pronunciation": "익스트랙션 / 발치",
      "term_kor": "발치",
      "description": "이를 뽑는 것.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Surgical ext (S.ext)",
      "pronunciation": "써지컬 발치",
      "term_kor": "수술 발치",
      "description": "뼈 속에 묻혀있는 치아를 수술로 뽑는 것 (예: 매복된 사랑니).",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Implant",
      "pronunciation": "임플란트",
      "term_kor": "임플란트",
      "description": "치아가 빠진 부위에 인공치아.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Fixture",
      "pronunciation": "픽스쳐",
      "term_kor": "임플란트 치근",
      "description": "뼈 속에 심는 임플란트 뿌리 부분.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Abutment",
      "pronunciation": "어버트먼트",
      "term_kor": "지대주",
      "description": "임플란트 중간 기둥.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Healing abutment",
      "pronunciation": "힐링 어버트먼트",
      "term_kor": "힐링 어버트먼트",
      "description": "Fixture 식립 후 2~3개월 지나 골 유착이 된 후에 보철물이 들어갈 공간을 확보해 주기 위해 해주는 것.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Angle abutment",
      "pronunciation": "앵글 어버트먼트",
      "term_kor": "앵글 어버트먼트",
      "description": "삽입로가 맞지 않을 때 경사가 진 어버트먼트.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Bar type abutment",
      "pronunciation": "바 타입 어버트먼트",
      "term_kor": "바 타입 어버트먼트",
      "description": "Implant denture를 하기 위해 Fixture 사이에 Bar로 연결.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "GBR",
      "pronunciation": "지비알",
      "term_kor": "골유도재생술",
      "description": "골(뼈) 결손부에 자가골(자가뼈)과 인공골(인공뼈)을 섞어 이식하고 차폐막으로 덮어 골의 생성을 유도 촉진 시킴.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Bone graft",
      "pronunciation": "본 그라프트",
      "term_kor": "치조골이식술",
      "description": "인공 뼈를 이식.",
      "related_terms": []
    },
    {
      "category": "외과",
      "term_eng": "Sinus lifting",
      "pronunciation": "사이너스 리프팅",
      "term_kor": "상악동거상술",
      "description": "상악 구치부(위 어금니)에서 잇몸뼈 흡수가 많아 상악동과의 거리가 가까울 때, 상악동 점막을 들어 올려 골이식을 하여 임플란트 식립에 적당한 높이로 만들어주는 술식.",
      "related_terms": []
    },

    // 5. 임플란트 재료 및 기구
    {
      "category": "임플란트/재료",
      "term_eng": "Osteotome",
      "pronunciation": "오스테오톰",
      "term_kor": "절골도",
      "description": "기구를 이용하여 상악동 점막을 거상시키거나 골이식을 하여 원하는 골의 높이로 형성하여 임플란트를 식립함.",
      "related_terms": []
    },
    {
      "category": "임플란트/재료",
      "term_eng": "Sinusitis",
      "pronunciation": "사이노사이티스",
      "term_kor": "상악동염",
      "description": "상악동에 염증이 생기는 것.",
      "related_terms": []
    },
    {
      "category": "임플란트/재료",
      "term_eng": "Septum",
      "pronunciation": "셉툼",
      "term_kor": "격벽",
      "description": "상악동 부위의 나누어진 공간.",
      "related_terms": []
    },
    {
      "category": "임플란트/재료",
      "term_eng": "Allograft",
      "pronunciation": "알로그라프트",
      "term_kor": "동종골",
      "description": "타인의 뼈를 처리하여 감염원을 제거하고 면역 반응을 일으키지 않도록 한 것. 세포가 없어 골 생성 기능은 없음.",
      "related_terms": []
    },
    {
      "category": "임플란트/재료",
      "term_eng": "Xenograft",
      "pronunciation": "제노그라프트",
      "term_kor": "이종골",
      "description": "동물의 뼈(주로 송아지 뼈)를 이용해 만듦. 양이 많고 저렴하여 가장 널리 사용됨.",
      "related_terms": []
    },
    {
      "category": "임플란트/재료",
      "term_eng": "Alloplastic material",
      "pronunciation": "알로플라스틱",
      "term_kor": "합성골",
      "description": "인공적으로 합성해서 만든 뼈. 질이 떨어지지만 저렴함.",
      "related_terms": []
    },

    // 6. 차팅 및 일반
    {
      "category": "차트/일반",
      "term_eng": "Chief complain (C.C)",
      "pronunciation": "씨씨",
      "term_kor": "주소",
      "description": "환자가 가장 아파하거나 불편한 것. 즉, 치과에 오게 된 원인.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Mobility (Mob)",
      "pronunciation": "모빌리티",
      "term_kor": "동요도",
      "description": "치아가 흔들림. (= Fluctuation)",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Oral examination (O.E)",
      "pronunciation": "오이",
      "term_kor": "구강검사",
      "description": "구강 검사.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Fracture (Fx)",
      "pronunciation": "프랙쳐",
      "term_kor": "파절",
      "description": "깨지거나 부서짐.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Caries",
      "pronunciation": "캐리어스",
      "term_kor": "충치",
      "description": "충치.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Plaque",
      "pronunciation": "플라그",
      "term_kor": "치태",
      "description": "치태, 치면세균막.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Treatment (Tx)",
      "pronunciation": "티엑스",
      "term_kor": "치료",
      "description": "치료.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Calculus",
      "pronunciation": "캘큘러스",
      "term_kor": "치석",
      "description": "치석.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Swelling",
      "pronunciation": "스웰링",
      "term_kor": "붓기",
      "description": "종창, 붓기.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Bleeding",
      "pronunciation": "블리딩",
      "term_kor": "출혈",
      "description": "피가 나는 것.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Impression (Imp)",
      "pronunciation": "임프레션",
      "term_kor": "인상채득",
      "description": "치아 본 뜨기.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Root Rest (R.R)",
      "pronunciation": "루트 레스트",
      "term_kor": "잔존 치근",
      "description": "뿌리만 남은 치아.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "Check-up (C-P)",
      "pronunciation": "체크업",
      "term_kor": "검진",
      "description": "검진.",
      "related_terms": []
    },
    {
      "category": "차트/일반",
      "term_eng": "FGG",
      "pronunciation": "에프지지",
      "term_kor": "유리치은이식술",
      "description": "잇몸이식 (단단한 입천장 잇몸을 떼어 부족한 잇몸 쪽에 이식).",
      "related_terms": []
    },

    // 7. 진료 행정 및 기타
    {
      "category": "행정/기타",
      "term_eng": "Premedication (RX)",
      "pronunciation": "프리메디케이션",
      "term_kor": "전처방",
      "description": "처방 후 치료 (전처방).",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Diastema",
      "pronunciation": "다이아스테마",
      "term_kor": "정중이개",
      "description": "전치부(앞니) 공간이 벌어진 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Food impaction",
      "pronunciation": "푸드 임팩션",
      "term_kor": "식편압입",
      "description": "음식물이 치아 사이에 끼이는 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "N/P (New patient)",
      "pronunciation": "엔피",
      "term_kor": "신환",
      "description": "신환 (처음 온 환자).",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "W.M",
      "pronunciation": "-",
      "term_kor": "예약 시기",
      "description": "Week(주) / Month(달) (예약 잡을 시 예약 시기).",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "WK / CK",
      "pronunciation": "위크 / 체크",
      "term_kor": "주 / 확인",
      "description": "WK: Week (주) / CK: Check (확인).",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Numbness",
      "pronunciation": "넘니스",
      "term_kor": "마비감",
      "description": "저림, 마비, 감각이 없다.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "OP (Operation)",
      "pronunciation": "오피",
      "term_kor": "수술",
      "description": "수술.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "St-o, s/o (Stitch out)",
      "pronunciation": "스티치 아웃",
      "term_kor": "발사",
      "description": "실밥 제거.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Dressing (Dr)",
      "pronunciation": "드레싱",
      "term_kor": "소독",
      "description": "소독.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Suture",
      "pronunciation": "슈쳐",
      "term_kor": "봉합",
      "description": "꿰매는 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Midazolam (m)",
      "pronunciation": "미다졸람",
      "term_kor": "수면유도제",
      "description": "수면 치료 시 사용하는 유도제.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Setting",
      "pronunciation": "세팅",
      "term_kor": "장착",
      "description": "보철물 장착. (tem setting: 임시로 붙임 / final setting: 완전히 붙임).",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Temporary crown (temp cr)",
      "pronunciation": "템포러리 크라운",
      "term_kor": "임시치아",
      "description": "임시치아.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Bite taking",
      "pronunciation": "바이트 테이킹",
      "term_kor": "교합채득",
      "description": "위아래 치아 맞물림을 기록하는 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Prep",
      "pronunciation": "프렙",
      "term_kor": "치아 삭제",
      "description": "본을 뜨기 위해 치아를 깎는 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Remove / Removal",
      "pronunciation": "리무브 / 리무벌",
      "term_kor": "제거",
      "description": "기존 보철물 제거.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Polishing",
      "pronunciation": "폴리싱",
      "term_kor": "연마",
      "description": "표면을 매끄럽게 하는 것.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Pain",
      "pronunciation": "페인",
      "term_kor": "통증",
      "description": "통증.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Patient (Pt)",
      "pronunciation": "페이션트 / 피티",
      "term_kor": "환자",
      "description": "환자.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Perio-Apical (P/A)",
      "pronunciation": "피에이",
      "term_kor": "치근단 촬영",
      "description": "치근단(x-ray). 치아 뿌리 쪽의 상태를 확인하기 위한 촬영.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Panorama",
      "pronunciation": "파노라마",
      "term_kor": "파노라마",
      "description": "X-선을 이용해 치아 전반을 진단할 수 있는 촬영.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "CT",
      "pronunciation": "씨티",
      "term_kor": "CT",
      "description": "치아와 잇몸뼈, 신경관, 상악동 등 치과 진료에서의 분석과 진단이 정확하고 용이한 컴퓨터 단층 촬영.",
      "related_terms": []
    },
    {
      "category": "행정/기타",
      "term_eng": "Infiltration Anesthesia",
      "pronunciation": "인필트레이션",
      "term_kor": "침윤마취",
      "description": "피부나 결합조직 등에 국소마취약을 침윤시켜서 그곳의 감각신경을 마취하는 방법.",
      "related_terms": []
    }
  ],
  "consultation_scripts": [
    {
      "situation": "인사 및 상담 도입 (방송 보고 문의)",
      "content": "안녕하세요, 임플란트 방송 보시고 문의주신 강남역에 위치한 **젊어지는치과**입니다. 저는 방송 보신 병원의 상담실장 OOO라고 하는데요. ^^ 방송 내용에 대해 상담해드리려고 전화드렸습니다.\n\n현재 치아가 어떠신가요? 흔들리거나 빠지셨거나 불편하신 곳이 있으실까요?"
    },
    {
      "situation": "병원 차별점 (컴퓨터 분석)",
      "content": "방송 보신 대로 저희는 부작용이 많은 일반 임플란트가 아니라, **컴퓨터 분석**을 통해서 전혀 부작용이 없는 임플란트 치료를 하고 있습니다. 3D CT 촬영을 통해 신경관 위치나 뼈 상태를 정확히 분석 후 시술합니다."
    },
    {
      "situation": "가격 이벤트 및 조건",
      "content": "임플란트 비용은 기존에 한 대당 130만원부터 진행했었는데, 개원 21주년 디지털센터 오픈 기념으로 **O월 O일까지(일주일 이내)** 오시는 분에 한해서만 특별히 **한 대당 65만원부터** 진행하실 수 있도록 혜택을 드리고 있습니다.\n\n(치아 여러 개 치료 시: 2개 심으면 1개를 무료로 진행하는 것과 같은 혜택입니다!)"
    },
    {
      "situation": "뼈이식 비용 및 절감",
      "content": "저희는 잇몸뼈가 가장 튼튼한 곳만 골라 식립하기 때문에 전체 임플란트 개수를 줄여 비용적인 부분도 절감할 수 있으세요.\n\n만약 뼈가 너무 얇거나 없어서 이식이 꼭 필요한 경우에는 양에 따라 **30만원부터** 별도 추가 비용이 발생할 수 있습니다. 정확한 건 원장님께서 CT 분석 후 말씀드릴 수 있어요."
    },
    {
      "situation": "무료 혜택 및 내원 유도",
      "content": "내원하시면 **30만원 상당의 3D CT 촬영 및 분석**을 **무료**로 진행해드리고 있습니다.\n또한, **수면 치료 1회(50만원 상당) 무료 혜택**도 드리고 있으니, 치과 공포가 있으셔도 편안하게 진료 받으실 수 있습니다.\n\n이 좋은 기회 놓치지 마시고 오셔서 상담이라도 먼저 받아보시는 게 어떠실까요?"
    },
    {
      "situation": "추가 혜택 (지방 환자/동반)",
      "content": "★ 지방에서 오셔서 당일 수술하시는 경우 상황에 따라 **숙박비 지원**도 가능합니다.\n★ 지인분과 동반 내원하셔서 치료 진행 시 총 진료비의 **10~20% 추가 할인** 혜택도 있습니다."
    },
    {
      "situation": "Q. 컴퓨터분석 임플란트란?",
      "content": "A. 잇몸을 많이 절개하는 일반 수술과 달리, 컴퓨터 분석을 통해 최적의 위치를 파악하여 **최소 절개**로 식립하는 방식입니다. 통증과 출혈이 훨씬 적고, 조건이 맞으면 당일에 임시 치아까지 완성할 수 있는 최신 술식입니다."
    },
    {
      "situation": "Q. 치료 기간은 얼마나 걸리나요?",
      "content": "A. 보통 3개월 정도 소요되지만, 컴퓨터 분석 임플란트는 빠르면 **1개월~3개월** 내에 완성 가능합니다. 뼈 상태가 좋으면 당일 식립 후 바로 식사도 가능하실 정도로 회복이 빠릅니다."
    },
    {
      "situation": "Q. 당뇨/고혈압 환자도 가능한가요?",
      "content": "A. 네, 가능합니다. 저희 병원은 당뇨협회 자문 병원으로, 최소 절개 시술을 하기 때문에 출혈과 감염 위험이 적어 **당뇨나 고혈압, 고령의 환자분들도 안전하게** 수술 받으실 수 있습니다."
    },
    {
      "situation": "Q. 수면 치료는 중간에 깨나요?",
      "content": "A. 전신 마취가 아닌 **의식하 진정 요법**(가수면)이므로, 자가 호흡을 하며 편안하게 잠든 상태와 비슷합니다. 의료진과 간단한 의사소통은 가능하지만 수술 과정은 기억하지 못하시므로 공포감 없이 편안하게 받으실 수 있습니다."
    },
    {
      "situation": "Closing (신뢰 강조)",
      "content": "저희 병원은 21년 동안 강남역 한 자리에서 진료해온 병원이며, 전국의 치과 의사들이 기술을 배우러 오는 유명한 곳입니다. 믿고 방문해 주시면 정성껏 진료해 드리겠습니다."
    }
  ],
  "new_patient_checklist": [
    {
      "type": "필수 확인",
      "item": "상담 희망 과목 (임플란트 / 전체 검진 등) 및 현재 불편한 부위 파악"
    },
    {
      "type": "필수 확인",
      "item": "성별 및 생년월일 (**49년생 이전 출생자는 거동 가능 여부 필수 확인**)"
    },
    {
      "type": "필수 확인",
      "item": "현재 복용 중인 약물 확인 (처방전 지참 안내)"
    },
    {
      "type": "질환 확인",
      "item": "당뇨, 고혈압, 골다공증(주사/약), 심장질환, 뇌질환 등 전신질환 여부"
    },
    {
      "type": "질환 확인",
      "item": "**파킨슨 환자** (떨림 증상으로 CT 촬영 가능한지 확인)"
    },
    {
      "type": "질환 확인",
      "item": "**투석 환자** (치과 치료 가능한지 주치의 소견 확인 필요)"
    },
    {
      "type": "질환 확인",
      "item": "**골다공증 약/주사** (턱뼈 괴사 위험성 있으므로 약 끊기 가능한지 등 확인)"
    },
    {
      "type": "특이 사항",
      "item": "폐쇄공포증 여부 (엘리베이터 탑승 및 CT 촬영 가능 여부)"
    },
    {
      "type": "특이 사항",
      "item": "휠체어 사용 여부 (촬영 시 5~10분 서 계실 수 있는지 확인)"
    },
    {
      "type": "비용 상담",
      "item": "의료급여 1종 수급자 여부 (진료의뢰서 지참 안내, 미지참시 비급여 설명)"
    }
  ],
  "reservation_management": [
    {
      "step": "예약 완료 안내 (SMS)",
      "content": "안녕하세요. [고객명]님. 젊어지는치과입니다.\n[날짜] [시간]에 상담 예약 되셨습니다.\n원장님께서 고객님 상담을 위해 시간을 비워두셨으니 꼭 시간 맞춰 내원 부탁드립니다.^^"
    },
    {
      "step": "신환 미내원 (당일)",
      "content": "[젊어지는치과] [고객명]님, 오늘 급한 용무가 있으셨는지 뵙지 못해 연락드렸습니다.\n치과 치료는 미루시면 기간과 비용이 늘어날 수 있습니다. 편하실 때 연락 주시면 빠른 예약 도와드리겠습니다.\n\n* 강남역 10번 출구 하나은행 건물 9층/12층"
    },
    {
      "step": "예약 취소 방어 (스크립트)",
      "content": "(잘못된 예): \"네, 취소해 드릴게요.\"\n\n(올바른 예): \"아, [고객명]님! 원장님께서 고객님 상담을 위해 **1시간이나 시간을 비워두셨는데** 혹시 시간 조정이라도 어려우실까요? 30만원 상당 CT 무료 혜택도 이번 주까지만 가능해서 너무 아까워서요 ㅠㅠ\""
    },
    {
      "step": "전일 미내원 리콜",
      "content": "안녕하세요, 젊어지는치과입니다. 어제 뵙기로 했는데 못 오셔서 걱정되어 연락드렸습니다.\n혹시 내원이 어려우신 사정이 있으셨나요? 개원 21주년 혜택 챙겨드리고 싶으니 다시 한번 시간 내주시면 감사하겠습니다."
    }
  ]
};