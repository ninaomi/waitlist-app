export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="py-12 bg-background border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">Product Name</h2>
              <p className="text-muted-foreground mt-1">The perfect solution for your needs</p>
            </div>
  
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-medium mb-3">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#waitlist" className="text-muted-foreground hover:text-primary">
                      Join Waitlist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h3 className="font-medium mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© {currentYear} Product Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  