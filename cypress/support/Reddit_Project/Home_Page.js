class HomePage{
    HomePage(){
        cy.visit('https://www.reddit.com');
        cy.xpath('(//button[@id="login"])[1][1]').click();
        cy.xpath('(//button[@id="expand-user-drawer-button"])').click();
        cy.xpath('(//button[@id="user-drawer-content"])[1][1]').click();
        cy.wait(1000);
    }
    Open_navigation(){
        cy.xpath('(//button[@id="navbar-menu-button"])').click();
        cy.xpath('(//a[@id="home-posts"])').click();
        cy.xpath('(//a[@id="popular-posts"])').click();
        cy.xpath('(//div[@id="left-sidebar"])').click();
        cy.xpath('(//div[@id="left-sidebar"])').click();
    }
    Topic(){
        cy.xpath('(//div[@id="left-sidebar"])').should('be.visible');
        cy.xpath('(//div[@id="TOPICS"])[1]').click();
        cy.xpath('(//div[@id="TOPICS"])[2]').click();
        cy.xpath('(//div[@id="TOPICS"])[3]').click();
        cy.xpath('(//div[@id="TOPICS"])[4]').click();
        cy.xpath('(//div[@id="TOPICS"])[5]').click();
        cy.xpath('(//div[@id="TOPICS"])[6]').click();
    }
    Internet_Cuture_Vireal(){
        cy.xpath('(//div[@id="TOPICS"])[1]').should('be.visible');
        cy.path('(//a[@id="Internet Culture (Viral)"])[1]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[2]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[3]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[4]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[5]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[6]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[7]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[8]').click();
        cy.path('(//a[@id="Internet Culture (Viral)"])[9]').click();
    }
    Amezing(){
        cy.path('(//a[@id="Internet Culture (Viral)"])[1]').should('be.visible');
        cy.xpath('(//button[@id="topic-tabgroup"])[1]').click();
        cy.xpath('(//button[@id="topic-tabgroup"])[2]').click();
    }
    Post(){
        cy.xpath('(//button[@id="topic-tabgroup"])[1]').should('be.visible');
        cy.xpath('(//a[@id="t3_1gtzbnb"])[1]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb"])[2]').should('be.visible');
        cy.path('(//div[@id="t3_1gtzbnb-aspect-ratio"])[2]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][1][1][2]').click();
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][1]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][1][2][2]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][1]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][1][3][1]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb-aspect-ratio"])[2][2]').should('be.visible');
        cy.xpath('(//span[@id="t3_1gtzbnb"][3]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb"])[3]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb"])[3]').should('be.visible');
        cy.xpath('(//button[@id="t3_1gtzbnb"])[3][1]').should('be.visible');
        cy.xpath('(//div[@id="t3_1gkaz0m"])[2][1]').should('be.visible');
        cy.xpath('(//div[@id="t3_1gkaz0m"])[2][2]').should('be.visible');
        cy.xpath('(//button[@id="main-content"])').should('be.visible');
        cy.xpath('(//button[@id="main-content"])').click();
        cy.xpath('(//a[@id="main-content"])').click();
    }
    Animals_Pets(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[2]').click();
        cy.xpath('(//div[@id="main-content"])').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][3]').should('be.visible');      
    }
    Cringe_facepalm(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[3]').click();
        cy.xpath('(//a[@id="t3_1gu363q"])[1]').should('be.visible');
        cy.xpath('(//div[@id="t3_1gu363q"])[1]').should('be.visible');
        cy.xpath('(//div[@id="t3_1gu363q"])[2]').should('be.visible');
    }
    funny(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[4]').click();
        cy.xpath('(//h1[@id="main-content"])').should('be.visible');
        cy.xpath('(//a[@id="main-content"])').should('be.visible');
        cy.xpath('(//a[@id="t3_1gu47qo"])[1]').should('be.visible');
        cy.xpath('(//img[@id="post-image"])').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
        
    }
    Interesting(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[5]').click();
        cy.xpath('(//div[@id="main-content"])').should('be.visible');
        cy.xpath('(//a[@id="t3_1gu1zeg"])[1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
   
    }
    Memes(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[6]').click();
        cy.xpath('(//h1[@id="main-content"])').should('be.visible');
        cy.xpath('(//a[@id="t3_1gu61nm"])[1]').should('be.visible');
        cy.xpath('(//img[@id="post-image"])').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][3]').should('be.visible');      
        
    }  
    Oddly_Satisfying(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[7]').click();
        cy.xpath('(//h1[@id="main-content"])').should('be.visible');
        cy.xpath('(//div[@id="main-content"])').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
    } 
    Reddit_Meta(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[8]').click();
        cy.xpath('(//a[@id="t3_1gtx6pd"])[1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
    }
    Wholesome_Heartwarming(){
        cy.xpath('(//a[@id="Internet Culture (Viral)"])[9]').click();
        cy.xpath('(//a[@id="t3_1gtyhn2"])[1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][1]').should('be.visible');
        cy.xpath('(//div[@id="right-sidebar-container"])[1][2]').should('be.visible');
        
    }
    
}


export default HomePage