const defaultSettings = 
    {
        "theme": "dark",
        "visitorName": "John Doe",
        "lastVisit": "2026-11-01"
    };

const storageKey = 'userSettings';

let loadedSettings;

try 
    {
    const rawData = localStorage.getItem(storageKey);
    
        if (rawData) 
        {
            loadedSettings = JSON.parse(rawData);
        } 
    else 
        {
            loadedSettings = defaultSettings;
            localStorage.setItem(storageKey, JSON.stringify(defaultSettings));
        }
    } 
    catch (error) 
        {
            console.error("Error reading from storage, using defaults:", error);
            loadedSettings = defaultSettings;
        }

console.log(loadedSettings["theme"]);
    if (loadedSettings["theme"] === "dark") 
    {
        document.documentElement.style.backgroundColor = "#000000";
        document.documentElement.style.color = "#FFFFFF";
    }
    else
    {
        document.documentElement.style.backgroundColor = "#FFFFFF";
        document.documentElement.style.color = "#000000";
    }

window.onload = function()
    {
        loadedSettings["lastVisit"] = new Date().toISOString();
        localStorage.setItem(storageKey , JSON.stringify(loadedSettings));

        document.getElementById("themeToggle").addEventListener("click", function()
        {
            if (loadedSettings["theme"] === "dark")
                {
                    loadedSettings["theme"] = "light";
                    document.documentElement.style.backgroundColor = "#FFFFFF";
                    document.documentElement.style.color = "#000000";
                }
            else
                {
                    loadedSettings["theme"] = "dark";
                    document.documentElement.style.backgroundColor = "#000000";
                    document.documentElement.style.color = "#FFFFFF";
                }

            localStorage.setItem(storageKey, JSON.stringify(loadedSettings));
        });
    }