import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  LogOut, 
  Trophy, 
  Target, 
  TrendingUp, 
  BarChart3,
  Users,
  MapPin,
  Calendar
} from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const matchData = {
    teams: {
      home: { name: "Birmingham Phoenix", short: "BP", color: "bg-cricket-green" },
      away: { name: "Welsh Fire", short: "WF", color: "bg-cricket-red" }
    },
    venue: "Birmingham",
    date: "22-08-2025",
    time: "11:00 P.M. INDIA TIME"
  };

  const venueStats = [
    { label: "Batting 1st in last 15 matches", value: 60, color: "cricket-green" },
    { label: "Chasing wins in last 15 matches", value: 60, color: "cricket-green" },
    { label: "Win Toss, Choose to Field first", value: 73, color: "cricket-green" },
    { label: "Match and toss win", value: 47, color: "cricket-orange" }
  ];

  const h2hStats = [
    { label: "Head to Head Wins since 2021", home: 75, away: 25 },
    { label: "Chasing Wins since 2021", home: 62, away: 50 },
    { label: "Defending Wins since 2021", home: 38, away: 50 }
  ];

  const teamStrengthData = [
    { category: "Batting", home: 8, away: 8 },
    { category: "Bowling", home: 8, away: 6 },
    { category: "Recent Form", home: 7, away: 6 },
    { category: "Overall", home: 8, away: 7 }
  ];

  const StatCard = ({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) => (
    <Card className={`shadow-cricket ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center">
          <Badge variant="destructive" className="bg-cricket-red text-white px-4 py-1 rounded-full">
            {title}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  const CircularProgress = ({ value, label, sublabel }: { value: number; label: string; sublabel: string }) => (
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-2">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-muted"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={`${value * 2.51} 251`}
            className="text-cricket-green"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold">{value}%</span>
        </div>
      </div>
      <p className="text-xs font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">CRICPREDICT</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-gradient-stats text-white border-0">
                <Activity className="w-4 h-4 mr-1" />
                Live Analytics
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Match Header */}
      <div className="bg-gradient-sky text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">MATCH - 24</span>
              <Badge className="bg-white/20 text-white border-0">THE HUNDRED</Badge>
            </div>
            <p className="text-sm opacity-90">
              {matchData.date} ({matchData.venue}) - {matchData.time}
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">{matchData.teams.home.short}</span>
              </div>
              <p className="font-semibold">{matchData.teams.home.name}</p>
            </div>
            
            <div className="text-2xl font-bold">VS</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cricket-red rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-lg">{matchData.teams.away.short}</span>
              </div>
              <p className="font-semibold">{matchData.teams.away.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Venue & Toss */}
              <StatCard title="The Venue & Toss">
                <div className="grid grid-cols-2 gap-4">
                  {venueStats.map((stat, index) => (
                    <CircularProgress 
                      key={index}
                      value={stat.value}
                      label={`${stat.value}%`}
                      sublabel={stat.label}
                    />
                  ))}
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-center">140/169</p>
                  <p className="text-xs text-muted-foreground text-center">Avg score chased/defended in last 15 matches</p>
                </div>
              </StatCard>

              {/* Team Form & H2H */}
              <StatCard title="Team Form & H2H">
                <div className="space-y-3">
                  {h2hStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{stat.label}</span>
                        <div className="flex gap-2">
                          <span className="font-medium">{stat.home}%</span>
                          <span className="text-muted-foreground">{stat.away}%</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex-1 bg-cricket-green h-2 rounded-l" style={{width: `${stat.home}%`}}></div>
                        <div className="flex-1 bg-cricket-red h-2 rounded-r" style={{width: `${stat.away}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </StatCard>
            </div>

            {/* Team Batting Scenario */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <StatCard title="Team Batting Scenario">
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Average Score Batting</p>
                    <p className="text-sm">1st / 2nd in last 15 matches</p>
                    <p className="text-3xl font-bold">148 / 128</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-cricket-green/10 rounded-lg">
                      <p className="text-sm font-medium">Team Batting 1st Score</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>165-170</span>
                          <span className="text-cricket-green">Very Good Total</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>160-165</span>
                          <span className="text-cricket-blue">Competitive Total</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>&lt; 145</span>
                          <span className="text-cricket-red">Below par score</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">Observations</p>
                      <div className="mt-2 text-xs space-y-1">
                        <p>Good batting wicket favoring the chasing team</p>
                        <p>Birmingham has clear edge over Welsh in H2H</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StatCard>

              {/* Team Strength */}
              <StatCard title="Team Strength">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-foreground rounded-full"></div>
                      <span className="text-sm font-medium">Birmingham Phoenix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-cricket-green rounded-full"></div>
                      <span className="text-sm font-medium">Welsh Fire</span>
                    </div>
                  </div>
                  
                  {teamStrengthData.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.category}</span>
                        <div className="flex gap-4">
                          <span className="font-medium">{item.home}</span>
                          <span className="font-medium">{item.away}</span>
                        </div>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="absolute left-0 top-0 h-full bg-foreground rounded-full"
                          style={{ width: `${(item.home / 10) * 50}%` }}
                        ></div>
                        <div 
                          className="absolute right-0 top-0 h-full bg-cricket-green rounded-full"
                          style={{ width: `${(item.away / 10) * 50}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </StatCard>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Detailed statistical analysis and data visualization coming soon.</p>
            </div>
          </TabsContent>

          <TabsContent value="predictions">
            <div className="text-center py-12">
              <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">ML Predictions</h3>
              <p className="text-muted-foreground">Machine learning powered match outcome and score predictions.</p>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Comparison</h3>
              <p className="text-muted-foreground">Comprehensive head-to-head team performance analysis.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};