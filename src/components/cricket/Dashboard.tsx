import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  BarChart3, 
  TrendingUp, 
  Users, 
  LogOut,
  Target,
  Trophy,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Sword,
  Flame,
  Brain,
  LineChart,
  PieChart,
  Globe,
  Timer,
  Award,
  Star
} from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("live");

  const mockData = {
    liveMatch: {
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      score1: "165/4",
      score2: "89/2",
      overs1: "20.0",
      overs2: "12.3",
      winProbability: 68,
      targetScore: 166,
      predictedScore: 158
    },
    venues: [
      { name: "Eden Gardens", matches: 45, avgScore: 165, winRate: 68, tossWin: 52 },
      { name: "Wankhede", matches: 38, avgScore: 178, winRate: 72, tossWin: 58 },
      { name: "M. Chinnaswamy", matches: 42, avgScore: 182, winRate: 65, tossWin: 45 }
    ],
    teams: [
      { name: "Mumbai Indians", form: 85, h2h: "W-W-L-W-W", strength: 92, battingAvg: 168, bowlingAvg: 7.2 },
      { name: "Chennai Super Kings", form: 78, h2h: "L-W-W-L-W", strength: 88, battingAvg: 162, bowlingAvg: 7.8 },
      { name: "Royal Challengers", form: 72, h2h: "W-L-W-W-L", strength: 85, battingAvg: 175, bowlingAvg: 8.1 }
    ],
    players: [
      { name: "Virat Kohli", team: "RCB", runs: 634, average: 52.8, strikeRate: 138.2, form: 89 },
      { name: "Rohit Sharma", team: "MI", runs: 598, average: 49.8, strikeRate: 142.1, form: 85 },
      { name: "MS Dhoni", team: "CSK", runs: 487, average: 43.2, strikeRate: 135.6, form: 78 }
    ],
    predictions: [
      { match: "MI vs CSK", prediction: "MI Win", confidence: 68, expectedScore: "165-170" },
      { match: "RCB vs DC", prediction: "RCB Win", confidence: 72, expectedScore: "180-185" },
      { match: "KKR vs RR", prediction: "KKR Win", confidence: 55, expectedScore: "160-165" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-pitch text-white shadow-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">CRICPREDICT</h1>
              <Badge className="bg-white/20 text-white border-0 animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                LIVE
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                <Globe className="w-4 h-4 mr-1" />
                Global Analytics
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">
              Cricket Analytics Dashboard
            </h2>
            <p className="text-muted-foreground">
              Advanced data science platform for cricket insights and predictions
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="live">Live Match</TabsTrigger>
              <TabsTrigger value="venue">Venue Analysis</TabsTrigger>
              <TabsTrigger value="teams">Team Stats</TabsTrigger>
              <TabsTrigger value="players">Player Analytics</TabsTrigger>
              <TabsTrigger value="predictions">ML Predictions</TabsTrigger>
              <TabsTrigger value="insights">Data Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="live" className="space-y-6">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <CardTitle className="text-xl">Live Match Analysis</CardTitle>
                  </div>
                  <CardDescription>Real-time predictions and analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Match Status
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="font-medium">{mockData.liveMatch.team1}</span>
                          <span className="text-lg font-bold">{mockData.liveMatch.score1}</span>
                          <span className="text-sm text-muted-foreground">({mockData.liveMatch.overs1})</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="font-medium">{mockData.liveMatch.team2}</span>
                          <span className="text-lg font-bold">{mockData.liveMatch.score2}</span>
                          <span className="text-sm text-muted-foreground">({mockData.liveMatch.overs2})</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        AI Predictions
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span>Win Probability</span>
                            <span className="font-bold text-green-600">{mockData.liveMatch.winProbability}%</span>
                          </div>
                          <Progress value={mockData.liveMatch.winProbability} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
                            <div className="text-sm text-muted-foreground">Target</div>
                            <div className="text-lg font-bold">{mockData.liveMatch.targetScore}</div>
                          </div>
                          <div className="p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
                            <div className="text-sm text-muted-foreground">Predicted</div>
                            <div className="text-lg font-bold">{mockData.liveMatch.predictedScore}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="venue" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.venues.map((venue, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{venue.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Matches Played</span>
                        <Badge variant="secondary">{venue.matches}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Average Score</span>
                          <span className="font-medium">{venue.avgScore}</span>
                        </div>
                        <Progress value={venue.avgScore / 2} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Win Rate %</span>
                          <span className="font-medium">{venue.winRate}%</span>
                        </div>
                        <Progress value={venue.winRate} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Toss Win %</span>
                          <span className="font-medium">{venue.tossWin}%</span>
                        </div>
                        <Progress value={venue.tossWin} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="teams" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockData.teams.map((team, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg">{team.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current Form</span>
                          <span className="font-medium">{team.form}%</span>
                        </div>
                        <Progress value={team.form} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Head-to-Head</span>
                          <span className="font-mono text-xs">{team.h2h}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Team Strength</span>
                          <span className="font-medium">{team.strength}%</span>
                        </div>
                        <Progress value={team.strength} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="p-2 bg-muted/50 rounded text-center">
                          <div className="text-sm font-medium">{team.battingAvg}</div>
                          <div className="text-xs text-muted-foreground">Batting Avg</div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded text-center">
                          <div className="text-sm font-medium">{team.bowlingAvg}</div>
                          <div className="text-xs text-muted-foreground">Bowling Avg</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="players" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Top Player Analytics
                  </CardTitle>
                  <CardDescription>Individual player performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.players.map((player, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <div className="text-sm text-muted-foregroundx">{player.team}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{player.runs}</div>
                            <div className="text-xs text-muted-foreground">Runs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{player.average}</div>
                            <div className="text-xs text-muted-foreground">Average</div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Form</span>
                              <span>{player.form}%</span>
                            </div>
                            <Progress value={player.form} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="predictions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      ML Match Predictions
                    </CardTitle>
                    <CardDescription>AI-powered match outcome predictions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockData.predictions.map((pred, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">{pred.match}</div>
                          <Badge variant={pred.confidence > 65 ? "default" : "secondary"}>
                            {pred.confidence}% confidence
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Prediction: <span className="font-medium text-foreground">{pred.prediction}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Expected Score: <span className="font-medium text-foreground">{pred.expectedScore}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="w-5 h-5" />
                      Model Performance
                    </CardTitle>
                    <CardDescription>Prediction accuracy metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Overall Accuracy</span>
                        <span className="font-bold text-green-600">84.2%</span>
                      </div>
                      <Progress value={84.2} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Score Prediction</span>
                        <span className="font-bold text-blue-600">78.9%</span>
                      </div>
                      <Progress value={78.9} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Win Prediction</span>
                        <span className="font-bold text-purple-600">91.3%</span>
                      </div>
                      <Progress value={91.3} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Global Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">T20 avg score trending</span>
                        <Badge variant="outline">+12%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Powerplay runs</span>
                        <Badge variant="outline">+8%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Death over efficiency</span>
                        <Badge variant="outline">+15%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Timer className="w-5 h-5" />
                      Real-time Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">Live</div>
                        <div className="text-sm text-muted-foreground">Data Processing</div>
                      </div>
                      <div className="text-xs text-center text-muted-foreground">
                        Last updated: 2 seconds ago
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="text-sm">🏆 Home advantage: 62% win rate</div>
                      <div className="text-sm">⚡ Toss impact: 58% decisive</div>
                      <div className="text-sm">🎯 Venue correlation: High</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};