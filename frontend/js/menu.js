document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://localhost:5000/api/menu");
        const menuItems = await response.json();
        
        const menuList = document.getElementById("menu-list");
        menuItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.Name} - $${item.Price}`;
            menuList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
});

