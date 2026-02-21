const rawData = `2190\tAccommodation Services
34\tFood and Beverage Services
2217\tBars, Taverns, and Nightclubs
2212\tCaterers
2214\tMobile Food Services
32\tRestaurants
31\tHospitality
2197\tBed-and-Breakfasts, Hostels, Homestays
2194\tHotels and Motels
1912\tAdministrative and Support Services
1938\tCollection Agencies
110\tEvents Services
122\tFacilities Services
1965\tJanitorial Services
2934\tLandscaping Services
101\tFundraising
121\tSecurity and Investigations
1956\tSecurity Guards and Patrol Services
1958\tSecurity Systems Services
108\tTranslation and Localization
30\tTravel Arrangements
103\tWriting and Editing
48\tConstruction
406\tBuilding Construction
413\tNonresidential Building Construction
408\tResidential Building Construction
51\tCivil Engineering
431\tHighway, Street, and Bridge Construction
428\tSubdivision of Land
419\tUtility System Construction
435\tSpecialty Trade Contractors
453\tBuilding Equipment Contractors
460\tBuilding Finishing Contractors
436\tBuilding Structure and Exterior Contractors
91\tConsumer Services
90\tCivic and Social Organizations
1909\tIndustry Associations
107\tPolitical Organizations
1911\tProfessional Organizations
2318\tHousehold Services
100\tNon-profit Organizations
2258\tPersonal and Laundry Services
2272\tLaundry and Drycleaning Services
2259\tPersonal Care Services
2282\tPet Services
131\tPhilanthropic Fundraising Services
89\tReligious Institutions
2225\tRepair and Maintenance
2247\tCommercial and Industrial Machinery Maintenance
2240\tElectronic and Precision Equipment Maintenance
2255\tFootwear and Leather Goods Repair
2253\tReupholstery and Furniture Repair
2226\tVehicle Repair and Maintenance
28\tEntertainment Providers
38\tArtists and Writers
37\tMuseums, Historical Sites, and Zoos
2161\tHistorical Sites
2159\tMuseums
2163\tZoos and Botanical Gardens
115\tMusicians
2130\tPerforming Arts and Spectator Sports
2139\tCircuses and Magic Shows
2135\tDance Companies
39\tPerforming Arts
33\tSpectator Sports
2143\tRacetracks
2142\tSports Teams and Clubs
2133\tTheater Companies
40\tRecreational Facilities
2167\tAmusement Parks and Arcades
29\tGambling Facilities and Casinos
2179\tGolf Courses and Country Clubs
2181\tSkiing Facilities
124\tWellness and Fitness Services
201\tFarming, Ranching, Forestry
63\tFarming
150\tHorticulture
298\tForestry and Logging
256\tRanching and Fisheries
66\tFisheries
64\tRanching
43\tFinancial Services
129\tCapital Markets
1720\tInvestment Advice
45\tInvestment Banking
46\tInvestment Management
1713\tSecurities and Commodity Exchanges
106\tVenture Capital and Private Equity Principals
1673\tCredit Intermediation
41\tBanking
141\tInternational Trade and Development
1696\tLoan Brokers
1678\tSavings Institutions
1742\tFunds and Trusts
1743\tInsurance and Employee Benefit Funds
1745\tPension Funds
1750\tTrusts and Estates
42\tInsurance
1738\tClaims Adjusting, Actuarial Services
1737\tInsurance Agencies and Brokerages
1725\tInsurance Carriers
1905\tHolding Companies
14\tHospitals and Health Care
2115\tCommunity Services
2112\tServices for the Elderly and Disabled
2081\tHospitals
88\tIndividual and Family Services
2128\tChild Day Care Services
2122\tEmergency and Relief Services
2125\tVocational Rehabilitation Services
13\tMedical Practices
125\tAlternative Medicine
2077\tAmbulance Services
2048\tChiropractors
2045\tDentists
2060\tFamily Planning Centers
2074\tHome Health Care Services
2069\tMedical and Diagnostic Laboratories
139\tMental Health Care
2050\tOptometrists
2063\tOutpatient Care Centers
2054\tPhysical, Occupational and Speech Therapists
2040\tPhysicians
2091\tNursing Homes and Residential Care Facilities
25\tManufacturing
598\tApparel Manufacturing
615\tFashion Accessories Manufacturing
112\tAppliances, Electrical, and Electronics Manufacturing
998\tElectric Lighting Equipment Manufacturing
2468\tElectrical Equipment Manufacturing
3255\tFuel Cell Manufacturing
1005\tHousehold Appliance Manufacturing
54\tChemical Manufacturing
709\tAgricultural Chemical Manufacturing
703\tArtificial Rubber and Synthetic Fiber Manufacturing
690\tChemical Raw Materials Manufacturing
722\tPaint, Coating, and Adhesive Manufacturing
18\tPersonal Care Product Manufacturing
15\tPharmaceutical Manufacturing
727\tSoap and Cleaning Product Manufacturing
3251\tClimate Technology Product Manufacturing
24\tComputers and Electronics Manufacturing
973\tAudio and Video Equipment Manufacturing
964\tCommunications Equipment Manufacturing
3\tComputer Hardware Manufacturing
3245\tAccessible Hardware Manufacturing
994\tMagnetic and Optical Media Manufacturing
983\tMeasuring and Control Instrument Manufacturing
3254\tSmart Meter Manufacturing
7\tSemiconductor Manufacturing
144\tRenewable Energy Semiconductor Manufacturing
840\tFabricated Metal Products
852\tArchitectural and Structural Metal Manufacturing
861\tBoilers, Tanks, and Shipping Container Manufacturing
871\tConstruction Hardware Manufacturing
849\tCutlery and Handtool Manufacturing
883\tMetal Treatments
887\tMetal Valve, Ball, and Roller Manufacturing
873\tSpring and Wire Product Manufacturing
876\tTurned Products and Fastener Manufacturing
23\tFood and Beverage Manufacturing
562\tBreweries
564\tDistilleries
2500\tWineries
481\tAnimal Feed Manufacturing
529\tBaked Goods Manufacturing
142\tBeverage Manufacturing
65\tDairy Product Manufacturing
504\tFruit and Vegetable Preserves Manufacturing
521\tMeat Products Manufacturing
528\tSeafood Product Manufacturing
495\tSugar and Confectionery Product Manufacturing
26\tFurniture and Home Furnishings Manufacturing
1080\tHousehold and Institutional Furniture Manufacturing
1095\tMattress and Blinds Manufacturing
1090\tOffice Furniture and Fixtures Manufacturing
145\tGlass, Ceramics and Concrete Manufacturing
799\tAbrasives and Nonmetallic Minerals Manufacturing
773\tClay and Refractory Products Manufacturing
779\tGlass Product Manufacturing
794\tLime and Gypsum Products Manufacturing
616\tLeather Product Manufacturing
622\tFootwear Manufacturing
625\tWomen's Handbag Manufacturing
55\tMachinery Manufacturing
901\tAgriculture, Construction, Mining Machinery Manufacturing
147\tAutomation Machinery Manufacturing
3247\tRobot Manufacturing
918\tCommercial and Service Industry Machinery Manufacturing
935\tEngines and Power Transmission Equipment Manufacturing
3241\tRenewable Energy Equipment Manufacturing
923\tHVAC and Refrigeration Equipment Manufacturing
135\tIndustrial Machinery Manufacturing
928\tMetalworking Machinery Manufacturing
17\tMedical Equipment Manufacturing
679\tOil and Coal Product Manufacturing
61\tPaper and Forest Product Manufacturing
743\tPlastics and Rubber Product Manufacturing
146\tPackaging and Containers Manufacturing
117\tPlastics Manufacturing
763\tRubber Products Manufacturing
807\tPrimary Metal Manufacturing
83\tPrinting Services
20\tSporting Goods Manufacturing
60\tTextile Manufacturing
21\tTobacco Manufacturing
1029\tTransportation Equipment Manufacturing
52\tAviation and Aerospace Component Manufacturing
1\tDefense and Space Manufacturing
53\tMotor Vehicle Manufacturing
3253\tAlternative Fuel Vehicle Manufacturing
1042\tMotor Vehicle Parts Manufacturing
62\tRailroad Equipment Manufacturing
58\tShipbuilding
784\tWood Product Manufacturing
332\tOil, Gas, and Mining
56\tMining
341\tCoal Mining
345\tMetal Ore Mining
356\tNonmetallic Mineral Mining
57\tOil and Gas
3096\tNatural Gas Extraction
3095\tOil Extraction
1810\tProfessional Services
47\tAccounting
80\tAdvertising Services
148\tGovernment Relations Services
98\tPublic Relations and Communications Services
97\tMarket Research
50\tArchitecture and Planning
3246\tAccessible Architecture and Design
1862\tMarketing Services
99\tDesign Services
140\tGraphic Design
3256\tRegenerative Design
3126\tInterior Design
3242\tEngineering Services
3248\tRobotics Engineering
3249\tSurveying and Mapping Services
96\tIT Services and IT Consulting
118\tComputer and Network Security
3244\tDigital Accessibility Services
3102\tIT System Custom Software Development
1855\tIT System Design Services
3104\tIT System Installation and Disposal
3103\tIT System Operations and Maintenance
3107\tIT System Testing and Evaluation
3105\tIT System Training and Support
10\tLegal Services
120\tAlternative Dispute Resolution
9\tLaw Practice
136\tPhotography
70\tResearch Services
12\tBiotechnology Research
114\tNanotechnology Research
130\tThink Tanks
3243\tServices for Renewable Energy
16\tVeterinary Services
1757\tReal Estate and Equipment Rental Services
1779\tEquipment Rental Services
1798\tCommercial and Industrial Equipment Rental
1786\tConsumer Goods Rental
44\tReal Estate
128\tLeasing Non-residential Real Estate
1759\tLeasing Residential Real Estate
1770\tReal Estate Agents and Brokers
27\tRetail
1339\tFood and Beverage Retail
22\tRetail Groceries
1445\tOnline and Mail Order Retail
19\tRetail Apparel and Fashion
1319\tRetail Appliances, Electrical, and Electronic Equipment
3186\tRetail Art Dealers
111\tRetail Art Supplies
1409\tRetail Books and Printed News
1324\tRetail Building Materials and Garden Equipment
1423\tRetail Florists
1309\tRetail Furniture and Home Furnishings
1370\tRetail Gasoline
1359\tRetail Health and Personal Care Products
3250\tRetail Pharmacies
143\tRetail Luxury Goods and Jewelry
1292\tRetail Motor Vehicles
1407\tRetail Musical Instruments
138\tRetail Office Equipment
1424\tRetail Office Supplies and Gifts
1431\tRetail Recyclable Materials & Used Merchandise
1594\tTechnology, Information and Media
3133\tMedia & Telecommunications
82\tBook and Periodical Publishing
1602\tBook Publishing
81\tNewspaper Publishing
1600\tPeriodical Publishing
36\tBroadcast Media Production and Distribution
1641\tCable and Satellite Programming
1633\tRadio and Television Broadcasting
35\tMovies, Videos and Sound
127\tAnimation and Post-production
126\tMedia Production
1611\tMovies and Sound Recording
1623\tSound Recording
1625\tSheet Music Publishing
8\tTelecommunications
1649\tSatellite Telecommunications
1644\tTelecommunications Carriers
119\tWireless Services
6\tTechnology, Information and Internet
2458\tData Infrastructure and Analytics
3134\tBlockchain Services
3128\tBusiness Intelligence Platforms
3252\tClimate Data and Analytics
84\tInformation Services
3132\tInternet Publishing
3129\tBusiness Content
113\tOnline Audio and Video Media
3124\tInternet News
85\tLibraries
3125\tBlogs
1285\tInternet Marketplace Platforms
3127\tSocial Networking Platforms
4\tSoftware Development
109\tComputer Games
3131\tMobile Gaming Apps
5\tComputer Networking Products
3130\tData Security Software Products
3101\tDesktop Computing Software Products
3099\tEmbedded Software Products
3100\tMobile Computing Software Products
116\tTransportation, Logistics, Supply Chain and Storage
94\tAirlines and Aviation
87\tFreight and Package Transportation
1495\tGround Passenger Transportation
1504\tInterurban and Rural Bus Services
1512\tSchool and Employee Bus Services
1517\tShuttles and Special Needs Transportation Services
1532\tSightseeing Transportation
1505\tTaxi and Limousine Services
1497\tUrban Transit Services
95\tMaritime Transportation
1520\tPipeline Transportation
1573\tPostal Services
1481\tRail Transportation
92\tTruck Transportation
93\tWarehousing and Storage
59\tUtilities
383\tElectric Power Generation
385\tFossil Fuel Electric Power Generation
386\tNuclear Electric Power Generation
3240\tRenewable Energy Power Generation
390\tBiomass Electric Power Generation
389\tGeothermal Electric Power Generation
384\tHydroelectric Power Generation
387\tSolar Electric Power Generation
2489\tWind Electric Power Generation
382\tElectric Power Transmission, Control, and Distribution
397\tNatural Gas Distribution
398\tWater, Waste, Steam, and Air Conditioning Services
404\tSteam and Air-Conditioning Supply
1981\tWaste Collection
1986\tWaste Treatment and Disposal
400\tWater Supply and Irrigation Systems
133\tWholesale
1267\tWholesale Alcoholic Beverages
1222\tWholesale Apparel and Sewing Supplies
1171\tWholesale Appliances, Electrical, and Electronics
49\tWholesale Building Materials
1257\tWholesale Chemical and Allied Products
115\tWholesale Computer Equipment
1221\tWholesale Drugs and Sundries
1231\tWholesale Food and Beverage
1230\tWholesale Footwear
1137\tWholesale Furniture and Home Furnishings
1178\tWholesale Hardware, Plumbing, Heating Equipment
134\tWholesale Import and Export
1208\tWholesale Luxury Goods and Jewelry
1187\tWholesale Machinery
1166\tWholesale Metals and Minerals
1128\tWholesale Motor Vehicles and Parts
1212\tWholesale Paper Products
1262\tWholesale Petroleum and Petroleum Products
1153\tWholesale Photography Equipment and Supplies
1250\tWholesale Raw Farm Products
1206\tWholesale Recyclable Materials
1931\tTelephone Call Centers
123\tOutsourcing and Offshoring Consulting
132\tE-Learning Providers
68\tHigher Education
11\tBusiness Consulting and Services
102\tStrategic Management Services
2018\tTechnical and Vocational Training`;

const searchQueries = [
    "\"Hiring\" AND \"Bengaluru\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Bengaluru\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Bengaluru\" AND \"@\"",
    "\"Immediate Joining\" AND \"Bengaluru\" AND \"@\"",
    "\"We're Hiring\" AND \"Bengaluru\" AND \"@\"",
    "\"We are hiring\" AND \"Bengaluru\" AND \"@\"",
    "\"Hiring\" AND \"Mumbai\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Mumbai\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Mumbai\" AND \"@\"",
    "\"Immediate Joining\" AND \"Mumbai\" AND \"@\"",
    "\"We're Hiring\" AND \"Mumbai\" AND \"@\"",
    "\"We are hiring\" AND \"Mumbai\" AND \"@\"",
    "\"Hiring\" AND \"Hyderabad\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Hyderabad\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Hyderabad\" AND \"@\"",
    "\"Immediate Joining\" AND \"Hyderabad\" AND \"@\"",
    "\"We're Hiring\" AND \"Hyderabad\" AND \"@\"",
    "\"We are hiring\" AND \"Hyderabad\" AND \"@\"",
    "\"Hiring\" AND \"Chennai\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Chennai\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Chennai\" AND \"@\"",
    "\"Immediate Joining\" AND \"Chennai\" AND \"@\"",
    "\"We're Hiring\" AND \"Chennai\" AND \"@\"",
    "\"We are hiring\" AND \"Chennai\" AND \"@\"",
    "\"Hiring\" AND \"Pune\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Pune\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Pune\" AND \"@\"",
    "\"Immediate Joining\" AND \"Pune\" AND \"@\"",
    "\"We're Hiring\" AND \"Pune\" AND \"@\"",
    "\"We are hiring\" AND \"Pune\" AND \"@\"",
    "\"Hiring\" AND \"Delhi\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Delhi\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Delhi\" AND \"@\"",
    "\"Immediate Joining\" AND \"Delhi\" AND \"@\"",
    "\"We're Hiring\" AND \"Delhi\" AND \"@\"",
    "\"We are hiring\" AND \"Delhi\" AND \"@\"",
    "\"Hiring\" AND \"Gurugram\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Gurugram\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Gurugram\" AND \"@\"",
    "\"Immediate Joining\" AND \"Gurugram\" AND \"@\"",
    "\"We're Hiring\" AND \"Gurugram\" AND \"@\"",
    "\"We are hiring\" AND \"Gurugram\" AND \"@\"",
    "\"Hiring\" AND \"Ahmedabad\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Ahmedabad\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Ahmedabad\" AND \"@\"",
    "\"Immediate Joining\" AND \"Ahmedabad\" AND \"@\"",
    "\"We're Hiring\" AND \"Ahmedabad\" AND \"@\"",
    "\"We are hiring\" AND \"Ahmedabad\" AND \"@\"",
    "\"Hiring\" AND \"New Delhi\" AND \"@\"",
    "\"Urgent Hiring\" AND \"New Delhi\" AND \"@\"",
    "\"Immediate Joiner\" AND \"New Delhi\" AND \"@\"",
    "\"Immediate Joining\" AND \"New Delhi\" AND \"@\"",
    "\"We're Hiring\" AND \"New Delhi\" AND \"@\"",
    "\"We are hiring\" AND \"New Delhi\" AND \"@\"",
    "\"Hiring\" AND \"Noida\" AND \"@\"",
    "\"Urgent Hiring\" AND \"Noida\" AND \"@\"",
    "\"Immediate Joiner\" AND \"Noida\" AND \"@\"",
    "\"Immediate Joining\" AND \"Noida\" AND \"@\"",
    "\"We're Hiring\" AND \"Noida\" AND \"@\"",
    "\"We are hiring\" AND \"Noida\" AND \"@\""
];

let allLeads = [];
let totalDuplicates = 0;
let isScraping = false;

// DOM Elements
const apiKeyInput = document.getElementById('apiKey');
const startBtn = document.getElementById('startBtn');
const downloadBtn = document.getElementById('downloadBtn');
const leadsFoundEl = document.getElementById('leadsFound');
const batchProgressEl = document.getElementById('batchProgress');
const duplicatesRemovedEl = document.getElementById('duplicatesRemoved');
const progressFill = document.getElementById('progressFill');
const statusText = document.getElementById('statusText');
const resultsBody = document.getElementById('resultsBody');
const apifyInputEl = document.getElementById('apifyInput');
const activityLogEl = document.getElementById('activityLog');

// Extractor Elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const extractBtn = document.getElementById('extractBtn');
const extractorOutput = document.getElementById('extractorOutput');
const emailCountEl = document.getElementById('emailCount');
const separatorSelect = document.getElementById('extractorSeparator');
const sortCheckbox = document.getElementById('sortEmails');
const copyEmailsBtn = document.getElementById('copyEmailsBtn');
const downloadEmailsBtn = document.getElementById('downloadEmailsBtn');

// Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(`${target}Tab`).classList.add('active');
    });
});

// Initialize Apify Input
const defaultApifyInput = {
    maxPosts: 1,
    maxReactions: 5,
    postedLimit: "24h",
    profileScraperMode: "short",
    scrapeComments: false,
    scrapeReactions: false,
    sortBy: "relevance"
};

// Persistence Logic
const savedApiKey = localStorage.getItem('apify_api_key');
if (savedApiKey) apiKeyInput.value = savedApiKey;

const savedInput = localStorage.getItem('apify_actor_input');
if (savedInput) {
    apifyInputEl.value = savedInput;
} else {
    apifyInputEl.value = JSON.stringify(defaultApifyInput, null, 4);
}

// Save on input
apiKeyInput.addEventListener('input', () => {
    localStorage.setItem('apify_api_key', apiKeyInput.value);
});

// Input Validation
apifyInputEl.addEventListener('input', () => {
    try {
        JSON.parse(apifyInputEl.value);
        apifyInputEl.style.borderColor = 'var(--glass-border)';
        localStorage.setItem('apify_actor_input', apifyInputEl.value);
    } catch (e) {
        apifyInputEl.style.borderColor = '#ff4b2b'; // Red for error
    }
});

// Process ID list
const allIds = rawData.match(/^\d+/gm).map(id => parseInt(id));
const batchSize = 20;
const batches = [];

for (let i = 0; i < allIds.length; i += batchSize) {
    batches.push(allIds.slice(i, i + batchSize));
}

async function startScraping() {
    if (isScraping) {
        isScraping = false;
        statusText.innerText = "Stopping... waiting for active requests to finish.";
        return;
    }

    const token = apiKeyInput.value.trim();
    if (!token) {
        alert("Please enter your Apify API Token");
        return;
    }

    isScraping = true;
    startBtn.innerText = "Stop Scraping";
    startBtn.classList.add('btn-danger'); // Need to add this style
    downloadBtn.disabled = true;
    allLeads = [];
    totalDuplicates = 0;
    resultsBody.innerHTML = '';
    activityLogEl.innerHTML = ''; // Clear log
    sessionStorage.setItem('apify_session_active', 'true');

    addLogEntry(`System: Identified ${allIds.length} Industry IDs.`, 'success');
    addLogEntry(`System: Total Batches to process: ${batches.length}`, 'success');
    addLogEntry(`System: Firing all ${batches.length} batches simultaneously...`, 'success');
    statusText.innerText = `Launching all ${batches.length} batches simultaneously...`;

    let finishedCount = 0;

    const scrapingPromises = batches.map(async (currentBatch, index) => {
        // Double check flag at start of each batch
        if (!isScraping) return;

        try {
            const results = await runApifyScraper(token, currentBatch);
            // Check flag again after await in case it was stopped during the request
            if (!isScraping) return;
            processResults(results);
            addLogEntry(`Batch ${index + 1}: Success (${results.length} results)`, 'success');
        } catch (error) {
            console.error(`Batch ${index + 1} Error:`, error);
            addLogEntry(`Batch ${index + 1}: Failed (${error.message})`, 'error');
        } finally {
            finishedCount++;
            const activeCount = batches.length - finishedCount;
            const progress = (finishedCount / batches.length) * 100;
            progressFill.style.width = `${progress}%`;
            batchProgressEl.innerText = `${finishedCount}/${batches.length}`;

            if (isScraping) {
                statusText.innerText = `Batches: ${finishedCount} finished, ${activeCount} still running...`;
            }
            updateStats();
        }
    });

    await Promise.all(scrapingPromises);

    finalizeScraping();
}

function finalizeScraping() {
    statusText.innerText = isScraping ? "Scraping completed!" : "Scraping stopped by user.";
    addLogEntry(`System: Total leads found: ${allLeads.length}`, 'success');
    isScraping = false;
    sessionStorage.removeItem('apify_session_active');
    startBtn.innerText = "Start Scraping";
    startBtn.classList.remove('btn-danger');
    startBtn.disabled = false;
    downloadBtn.disabled = allLeads.length === 0;
}

// Initial session check
window.addEventListener('load', () => {
    if (sessionStorage.getItem('apify_session_active')) {
        addLogEntry("Warning: A previous scraping session may still be running in the background. Refresh again if this was an error.", "error");
        statusText.innerText = "Active session detected. Use caution.";
    }
});

function addLogEntry(message, type) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span>[${time}] ${message}</span>`;
    activityLogEl.prepend(entry);
}

async function runApifyScraper(token, ids) {
    let userInput = {};
    try {
        userInput = JSON.parse(apifyInputEl.value);
    } catch (e) {
        console.error("Invalid JSON in configuration field. Using defaults.");
        statusText.innerText = "Error: Invalid JSON in config. Using defaults.";
    }

    const payload = {
        ...userInput,
        authorsIndustryId: ids,
        searchQueries: searchQueries
    };

    const response = await fetch(`https://api.apify.com/v2/acts/harvestapi~linkedin-post-search/run-sync-get-dataset-items?token=${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
    }

    return await response.json();
}

function processResults(results) {
    results.forEach(item => {
        const lead = {
            linkedinUrl: item.linkedinUrl,
            content: item.content,
            author: item.author?.linkedinUrl || 'N/A'
        };

        const isDuplicate = allLeads.some(l => l.linkedinUrl === lead.linkedinUrl);

        if (!isDuplicate) {
            allLeads.push(lead);
            if (allLeads.length <= 100) {
                renderLead(lead);
            }
        } else {
            totalDuplicates++;
        }
    });
}

function renderLead(lead) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><a href="${lead.linkedinUrl}" target="_blank" class="link-cell">${lead.linkedinUrl}</a></td>
        <td><a href="${lead.author}" target="_blank" class="link-cell">${lead.author}</a></td>
        <td>${lead.content ? lead.content.substring(0, 100) + '...' : 'N/A'}</td>
    `;
    resultsBody.appendChild(tr);
}

function updateStats() {
    leadsFoundEl.innerText = allLeads.length;
    duplicatesRemovedEl.innerText = totalDuplicates;
}

function downloadCSV() {
    if (allLeads.length === 0) return;

    const headers = ["linkedinUrl", "author", "content"];
    const csvContent = [
        headers.join(","),
        ...allLeads.map(lead => headers.map(h => `"${(lead[h] || '').replace(/"/g, '""')}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `linkedin_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

startBtn.addEventListener('click', startScraping);
downloadBtn.addEventListener('click', downloadCSV);

// Email Extractor Logic
let extractedEmails = [];

// Drag & Drop Handlers
dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

function handleFile(file) {
    if (!file.name.endsWith('.csv') && !file.name.endsWith('.txt')) {
        alert('Please upload a .csv or .txt file');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target.result;
        processExtraction(text);
        addLogEntry(`Extractor: Loaded file ${file.name} (${(file.size / 1024).toFixed(1)} KB)`, 'success');
    };
    reader.readAsText(file);
}

function processExtraction(text) {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const matches = text.match(emailRegex) || [];

    // Deduplicate
    extractedEmails = [...new Set(matches.map(e => e.toLowerCase()))];

    if (sortCheckbox.checked) {
        extractedEmails.sort();
    }

    updateExtractorUI();
}

extractBtn.addEventListener('click', () => {
    updateExtractorUI();
    addLogEntry(`Extractor: Re-processed list with ${separatorSelect.value} separator.`, 'success');
});

function updateExtractorUI() {
    let separator = separatorSelect.value === 'newline' ? '\n' : separatorSelect.value;
    extractorOutput.innerText = extractedEmails.join(separator);
    emailCountEl.innerText = extractedEmails.length;
}

// Actions
copyEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    // For div, use Selection API or navigator.clipboard directly
    const text = extractorOutput.innerText;
    navigator.clipboard.writeText(text).then(() => {
        addLogEntry('System: Emails copied to clipboard!', 'success');

        const originalText = copyEmailsBtn.innerText;
        copyEmailsBtn.innerText = 'Copied!';
        setTimeout(() => copyEmailsBtn.innerText = originalText, 2000);
    });
});

downloadEmailsBtn.addEventListener('click', () => {
    if (extractedEmails.length === 0) return;

    const content = extractorOutput.innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extracted_emails_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addLogEntry('System: .txt file downloaded.', 'success');
});
